// QRCodeGeneratorForm.js
import React, { useState } from 'react';
import axios from 'axios';

const QRCodeGeneratorForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    message: '',
    generatedByName: '',
    generatedForName: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle QR code generation and download
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server for QR code generation
      const response = await axios.post('http://localhost:9090/generate', formData, {
        responseType: 'blob' // Set the response type to blob to handle file data
      });

      // Create a download link for the generated QR code
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generatedQRCode.png'); // Set the file name
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headerStyle}>Generate QR Code</h2>
      <form style={formStyle}>
        {/* Form input fields */}
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={inputContainerStyle}>
            <label htmlFor={key} style={labelStyle}>{capitalizeFirstLetter(key)}:</label>
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        ))}
        {/* Download button */}
        <button type="button" onClick={handleDownload} style={buttonStyle}>
          Download QR Code
        </button>

        {/* Redirect button */}
        {/* Add your redirect button here */}

      </form>
    </div>
  );
};

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Styles for better presentation
const formContainerStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '20px',
  backgroundColor: '#f4f4f4',
};

const headerStyle = {
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputContainerStyle = {
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
};

const labelStyle = {
  marginRight: '10px',
  fontWeight: 'bold',
  width: '100px', // Fixed width for labels
};

const inputStyle = {
  flex: '1', // Take remaining width
  padding: '8px',
  borderRadius: '20px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4caf50',
  color: '#fff',
  borderRadius: '20px',
  cursor: 'pointer',
  marginBottom: '10px',
};

export default QRCodeGeneratorForm;
