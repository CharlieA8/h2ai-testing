"use client"
import React, { useEffect, useState } from 'react';
import DoctorCards from './DoctorCards';
import "./page.css";
import Link from "next/link";


function Page() {


  const [location, setLocation] = useState("20057");
  const [insuranceCarrier, setHealth] = useState("Aetna"); 
  const [specialty, setSpeciality] = useState("Gas")

  useEffect(() => {
    const storedZip = localStorage.getItem("userZipCode");
    if (storedZip) {
      setLocation(storedZip);
    }
  }, []);

  useEffect(() => {
    const storedInsuranceCarrier = localStorage.getItem("insuranceCarrier");
    if (storedInsuranceCarrier) {
      setHealth(storedInsuranceCarrier);
    }
  }, []);

  useEffect(() => {
    const storedSpeciality = localStorage.getItem("speciality");
    if (storedSpeciality) {
      setSpeciality(storedSpeciality);
    }
  }, []);

  console.log(location, insuranceCarrier, specialty);


  return (
    <div className='get-doctors-container'>
        <h1>Care near you!</h1>
        <DoctorCards
          //specialty={specialty}
          //location={location}
          //insuranceCarrier={insuranceCarrier}
         />
        <Link href="/"><button className='return-button'>Return Home</button></Link>
    </div>
  );
}

export default Page;