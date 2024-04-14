import React from 'react';
import DoctorCards from './doctorCards';
import "./page.css";
import Link from "next/link";


function Page() {
  return (
    <div className='get-doctors-container'>
        <h1>Care near you!</h1>
        <DoctorCards />
        <Link href="/"><button className='return-button'>Return Home</button></Link>
    </div>
  );
}

export default Page;