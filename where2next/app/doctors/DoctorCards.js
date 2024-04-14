"use client"
import React, { useState, useEffect } from 'react';
import './DoctorCards.css';

const DoctorCards = () => {
  useEffect(() => {
    const fetchData = async () => {
    console.log('Component mounted, fetching data...');
    console.log(specialty, location, insuranceCarrier, "specialty, location, insuranceCarrier");
    const specialty = "gas";
    const location = "20057"; 
    const insuranceCarrier = "Aetna";

      try {
        const response = await fetch(`https://where2next-4fb781c3d1e4.herokuapp.com/get-doctors?specialty=${specialty}&location=${location}&insurance_carrier=${insuranceCarrier}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Make sure to include an empty dependency array to ensure this effect runs only once

  return (
    <div className="doctor-cards">
      {doctors.map((doctor, index) => (
        <a key={index} href={`https://health.usnews.com${doctor.doctor_url}`} target="_blank" className="doctor-card">
          <h2>{doctor.name}</h2>
          <img src={doctor.image_url} alt={doctor.name} />
          <p>Location: {doctor.address}</p>
          <p>Specialty: {doctor.specialty}</p>
        </a>
      ))}
    </div>
  );
};

export default DoctorCards;
