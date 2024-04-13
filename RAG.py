from langchain.document_loaders import WikipediaLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

search_term = "cardiovascular"
docs = WikipediaLoader(query=search_term, load_max_docs=1).load()

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size = 100,
    chunk_overlap  = 20,
    length_function = len,
    is_separator_regex = False,
)

data = text_splitter.split_documents(docs)
data[:3]

from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()

store = Chroma.from_documents(
    data, 
    embeddings, 
    ids = [f"{item.metadata['source']}-{index}" for index, item in enumerate(data)],
    collection_name="Wimbledon-Embeddings", 
persist_directory='db',
)
store.persist()

from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
import pprint


template = """You are a bot that answers questions about cardiovascular diseases, using only the context provided.
If you don't know the answer, simply state that you don't know.

{context}

Question: {question}"""

PROMPT = PromptTemplate(
    template=template, input_variables=["context", "question"]
)

llm = ChatOpenAI(temperature=0, model="gpt-4")

qa_with_source = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=store.as_retriever(),
    chain_type_kwargs={"prompt": PROMPT, },
    return_source_documents=True,
)

pprint.pprint(
    qa_with_source("What do I do if I have a high risk of cardiovascular disease")
)

