import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ThankYouContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ThankYouHeader = styled.h2`
  color: #4caf50;
`;

const ThankYouList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ThankYouListItem = styled.li`
  margin-bottom: 10px;
`;

const ThankYouPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <ThankYouContainer>
      <ThankYouHeader>Thank You!</ThankYouHeader>
      <p>Thank you for submitting the form. Here are the details:</p>
      <ThankYouList>
        <ThankYouListItem>Name: {formData.name}</ThankYouListItem>
        <ThankYouListItem>Age: {formData.age}</ThankYouListItem>
        <ThankYouListItem>Country: {formData.country}</ThankYouListItem>
      </ThankYouList>
    </ThankYouContainer>
  );
};

export default ThankYouPage;
