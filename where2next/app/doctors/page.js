"use client"
import React from 'react';
import DoctorCards from './DoctorCards'; // Note the change in import statement
import "./page.css";

function Page() {

  return (
    <div className='get-doctors-container'>
      <h1>Next Steps</h1>
      <DoctorCards />
    </div>
  );
}

export default Page; // Note the change in component name to start with uppercase
