"use client"
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Textarea from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import local from "@next/font/local";
import Link from "next/link";
import { color } from "framer-motion";
import {Spinner} from "@nextui-org/react";


export default function Home() {
  const context = localStorage.getItem("currentTopic");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (input.trim() === "") return;
  
    // Add user message to messages
    setMessages([
      ...messages,
      {
        id: uuidv4(),
        content: input,
        role: "user",
      },
    ]);
  
    setInput("");
    
    const search_term = context
    console.log(search_term)
    const question = input

    console.log(search_term)
    console.log(question)
    
    try {
      // Fetch response from API
      let answer; // Declare the 'answer' variable outside of the .then() block
      const response = await fetch(`http://localhost:5000/getAnswers?search=${search_term}&question=${question}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Convert the response body to text
        })
        .then(data => {
          console.log(data); // This will log the response body as a string
          // Now you can store the 'data' variable as needed
          // For example:
          answer = data; // Assign the value to the 'answer' variable
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });

      // Add API response to messages
      setMessages([
        ...messages,
        {
          id: uuidv4(),
          content: answer, // Use the 'answer' variable here
          role: "bot",
        },
      ]);
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("Error fetching data:", error);
      // Optionally, you can set a message in your state to inform the user about the error
    }
  };
  
  return (
    <div className="min-h-screen bg-pink-300">
      {/* create a button that is fixed top and right*/}
        <div className="absolute top-0 left-0 pt-5 pl-5">
        </div>
      {messages.length !== 0 ? (
        <div className="pb-32 pt-5 space-y-5 w-[75%] mx-auto relative">
            {messages.map((message) => (
            <div key={message.id} className="w-full">
              {message.role === "user" ? (
                <div className="flex  gap-x-2">
                  <div className="bg-gray-500 h-12 w-12 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-white p-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="rounded-lg p-3 w-full border-gray-500 border-2 text-sm">
                    {message.content}
                  </p>
                </div>
              ) : (
                <div className="flex gap-x-2">
                  <div className="bg-teal-500 h-12 w-12 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-white p-1"
                    >
                      <path d="M16.5 7.5h-9v9h9v-9z" />
                      <path
                        fillRule="evenodd"
                        d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="rounded-lg p-3 w-full border-teal-500 border-2 text-sm">
                    {message.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center pt-32">
          <h1 className="font-bold font-mono text-3xl wrap pl-6 pr-4 text-white drop-shadow-lg">
            Hi I am your AI Doctor! How can I help you today?
          </h1>
        </div>
      )}


      <form
        onSubmit={handleSubmit}
        className="p-20 fixed bottom-0 left-0 w-[75%] mx-auto right-0 bg-pink-300"
      >
        <div className="relative flex items-center">
          <Textarea
            tabIndex={0}
            required
            rows={1}
            value={input}
            onChange={handleInputChange}
            autoFocus
            placeholder="Send message..."
            spellCheck={false}
            className="w-full focus:outline-none shadow-grey shadow-xl placeholder:text-gray-400 text-sm text-zinc-700 p-5 pr-16 rounded-xl bg-white"
          />
          <button
            type="submit"
            className="absolute bg-teal-500 p-2 rounded-lg right-0 mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-black"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </form>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center rounded-md">
            <Link
              key={"questions"}
              href={"/questions"}
              className="text-md duration-500 black hover:text-lg text-white drop-shadow-lg"
            >
              click me to see relevant doctors in my area
            </Link>
      </div>
    </div>
  );
}
