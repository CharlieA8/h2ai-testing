import React, { useState } from 'react';

const Test = () => {
  // State to track selected symptoms
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the selected symptom to the array
      setSelectedSymptoms(prevSelected => [...prevSelected, value]);
    } else {
      // Remove the deselected symptom from the array
      setSelectedSymptoms(prevSelected => prevSelected.filter(symptom => symptom !== value));
    }
  };

  return (
    <div className="bg-pink-500 flex min-h-screen flex-col items-center justify-center">
      <h1>Test Page</h1>
      <form>
        <label>
          <input
            type="checkbox"
            value="Fever"
            checked={selectedSymptoms.includes('Fever')}
            onChange={handleCheckboxChange}
          />
          Fever
        </label>
        <label>
          <input
            type="checkbox"
            value="Cough"
            checked={selectedSymptoms.includes('Cough')}
            onChange={handleCheckboxChange}
          />
          Cough
        </label>
        {/* Add more checkboxes for other symptoms as needed */}
      </form>
      <div>
        <h2>Selected Symptoms:</h2>
        <ul>
          {selectedSymptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
