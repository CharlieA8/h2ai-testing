"use client"
import React, { useState, useEffect } from 'react';
import './DoctorCards.css';

const DoctorCards = () => {
  const [doctors, setDoctors] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
    console.log('Component mounted, fetching data...');

      try {
            const specialty = "Gas";
            const location = 20057;
            const insuranceCarrier = "Aetna";

            // log that we are fetching data
            console.log('Fetching data...');

            const response = await fetch(`http://localhost:5000/get-doctors?specialty=${specialty}&location=${location}&insurance_carrier=${insuranceCarrier}`);
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
        <div key={index} className="doctor-card">
          <h2>{doctor.name}</h2>
          <img src={doctor.image_url} alt={doctor.name} />
          <p>Location: {doctor.address}</p>
          <p>Specialty: {doctor.specialty}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorCards;
