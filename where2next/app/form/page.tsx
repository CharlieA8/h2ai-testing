import Link from "next/link";
import React from "react";
import Particles from "../components/particles";

const navigation = [
  { name: "idk whats wrong", href: "/projects" },
  { name: "i need help", href: "/info" },
];

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-pink-300">
        <h1>Form</h1>
        <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={200}
        />
      </div>
    );
  }