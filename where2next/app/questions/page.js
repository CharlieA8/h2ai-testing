"use client"
import React, { useState, useEffect} from "react";
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from "next/navigation";
import { Dropdown } from "@nextui-org/react";


export default function ZipCodeForm() {
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const router = useRouter();



 const [healthInsurance, setInsurance] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleInsuranceChange = (event) => {
    setInsurance(event.target.value); // Update insurance state with selected value
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userZipCode", zipCode);
    localStorage.setItem("userName", name);
    localStorage.setItem("healthInsurance:", healthInsurance); 
    router.push("/doctors");
    // You can add more logic here, like submitting the form data to a server
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-white via-pink-300 to-pink-500 ">
      <div className="hidden w-screen h-px md:block" />
      {/* <h1 className="px-4 z-10 text-xl text-white cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl bg-clip-text wrap drop-shadow-lg">
        What is your name and zip code?
      </h1> */}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'What is your name?',
          2000, // wait 1s before replacing "name" with "zip code"
          'What is your zip code?',
          2000, 
          'What is your insurance?', 
          2000
        ]}
        wrapper="h1"
        speed={20}
        style={{ fontSize: '4em', display: 'inline-block', paddingLeft: '2rem', color: 'white', dropshadow: '0px 3px 6px rgba(128, 128, 128, 0.5)' }}
        repeat={Infinity}
      />

      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="name" className="block mb-2 text-white drop-shadow-lg">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-gray-400 rounded px-2 py-1 w-full text-zinc-600"
            required
          />
        </label>
        <label htmlFor="zip" className="block mb-2 text-white drop-shadow-lg">
          Zip Code:
          <input
            type="text"
            id="zip"
            value={zipCode}
            onChange={handleZipCodeChange}
            className="border border-gray-400 rounded px-2 py-1 w-full text-zinc-600"
            required
          />
        </label>
        <label htmlFor="insurance" className="block mb-2 text-white drop-shadow-lg">
          Insurance:
          <select
            id="insurance"
            onChange={handleInsuranceChange}
            className="border border-gray-400 rounded px-2 py-1 w-full text-zinc-600"
            required
          >
            <option value="">Select Insurance</option>
            <option value="Kaiser">Kaiser</option>
            <option value="BCBS">BCBS</option>
            <option value="Cigna">Cigna</option>
            <option value="Elevance">Elevance</option>
            <option value="Other">Other</option>
          </select>
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
