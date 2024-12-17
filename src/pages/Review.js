import React, { useState } from 'react';
import styled from 'styled-components';

// Styling for the review form
const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ReviewTextarea = styled.textarea`
  width: 300px;
  height: 100px;
  margin: 10px;
  padding: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4a4a;
  }
`;

function Review() {
  const [review, setReview] = useState(''); // Manage the review input

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the review to the console (later, you can send this data to the server or store it locally)
    console.log('Review submitted:', review);
    setReview(''); // Clear the review after submission
  };

  return (
    <ReviewForm onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <ReviewTextarea
        placeholder="Describe your experience with accessibility..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <SubmitButton type="submit">Submit Review</SubmitButton>
    </ReviewForm>
  );
}

export default Review;
