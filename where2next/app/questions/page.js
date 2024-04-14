"use client"
import React, { useState } from "react";

export default function ZipCodeForm() {
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userZipCode", zipCode);
    localStorage.setItem("userName", name);
    // You can add more logic here, like submitting the form data to a server
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-pink-300 to-pink-500">
      <div className="hidden w-screen h-px md:block" />
      <h1 className="z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
        What is your name and zip code?
      </h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="name" className="block mb-2">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-400 rounded px-2 py-1"
            required
          />
        </label>
        <label htmlFor="zip" className="block mb-2">
          Zip Code:
          <input
            type="text"
            id="zip"
            value={zipCode}
            onChange={handleZipCodeChange}
            className="border border-gray-400 rounded px-2 py-1"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-pink-600 text-white rounded px-4 py-2 mt-2 hover:bg-pink-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
