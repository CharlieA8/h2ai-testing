import os
from langchain_community.document_loaders import WikipediaLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv
import pprint

load_dotenv()
key = os.getenv("OPENAI_API_KEY")
print(key)

def RagAnswers(search_term, question, token=key):
    docs = WikipediaLoader(query=search_term, load_max_docs=1).load()

    # openai.api_keys=os.getenv("OPEN_API_KEY")

    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size = 100,
        chunk_overlap  = 20,
        length_function = len,
        is_separator_regex = False,
    )

    data = text_splitter.split_documents(docs)
    data[:1]

    # embeddings = OpenAIEmbeddings()
    embeddings = OpenAIEmbeddings()

    store = Chroma.from_documents(
        data, 
        embeddings, 
        ids = [f"{item.metadata['source']}-{index}" for index, item in enumerate(data)],
        collection_name = search_term + "-Embeddings",
        persist_directory = 'db'
    )
    store.persist()

    template = """You are an AI doctor assistant that answers questions about cardiovascular diseases, using only the context provided. 
    Be helpful, professional, and reliable. If you don't know the answer, simply state that you don't know.
    {context}
    Question: {question}"""
    PROMPT = PromptTemplate(
        template=template, input_variables=["context", "question"]
    )

    llm = ChatOpenAI(temperature=1, model="gpt-3.5-turbo", openai_api_key=token)

    qa_with_source = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=store.as_retriever(),
        chain_type_kwargs={"prompt": PROMPT, },
        return_source_documents=True,
    )

    # pprint.pprint(qa_with_source(question))
    return qa_with_source(question)


RagAnswers("Cardiovascular", "What medicine should I take if I have a high risk of cardiovascular disease?")

# "What do I do if I have a high risk of cardiovascular disease?"
# "What medicine should I take if I have a high risk of cardiovascular disease?"