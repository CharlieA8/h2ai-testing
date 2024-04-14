import React from 'react';
import DoctorCards from './doctorCards';
import "./page.css";

function Page() {
  return (
    <div className='get-doctors-container'>
        <h1>Care near you!</h1>
        <DoctorCards />
    </div>
  );
}

export default Page;