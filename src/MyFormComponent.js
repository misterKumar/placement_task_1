import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MyFormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    country: '',
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries from an API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Extract necessary information from the API response
        const formattedCountries = data.map(country => ({
          code: country.cca2,
          name: country.name.common,
        }));
        setCountries(formattedCountries);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (formData.name && formData.age && formData.country) {
      // If validation passes, navigate to the "Thank You" page
      navigate('/thank-you', { state: { formData } });
    } else {
    
      alert('Please fill out all fields');
    }
  };

  const sortedCountries = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
  
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormLabel>
          Name:
          <FormInput type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormLabel>
        <FormLabel>
          Age:
          <FormInput type="number" name="age" value={formData.age} onChange={handleChange} />
        </FormLabel>
        <FormLabel>
          Country:
          <FormSelect name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {sortedCountries.map(country => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </FormSelect>
        </FormLabel>
        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormContainer>
  );
};

export default MyFormComponent;
