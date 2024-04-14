"use client"
import React, { useEffect, useState } from 'react';
import DoctorCards from './doctorCards';
import "./page.css";
import Link from "next/link";


function Page() {

  const storedZipCode = localStorage.getItem("userZipCode");

  const [userZipCode, setUserZipCode] = useState(storedZipCode || 20057);
  
  console.log(userZipCode);

  useEffect(() => {
    localStorage.setItem("userZipCode", userZipCode);
  }, [userZipCode]);

  return (
    <div className='get-doctors-container'>
        <h1>Care near you!</h1>
        <DoctorCards />
        <Link href="/"><button className='return-button'>Return Home</button></Link>
    </div>
  );
}

export default Page;