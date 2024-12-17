/*import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const DetailsImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookingInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

const BookingButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const places = [
  { id: 1, name: 'Accessible Hotel', image: '/assets/hotel.jpg', description: 'A beautiful hotel fully equipped for accessibility.' },
  { id: 2, name: 'Wheelchair-Friendly Restaurant', image: '/assets/restaurant.jpg', description: 'A restaurant with accessible seating and restrooms.' },
  { id: 3, name: 'Accessible Park', image: '/assets/park.jpg', description: 'A park with wide paths and ramps.' },
];

function Details() {
  const { id } = useParams();
  const place = places.find(p => p.id === parseInt(id));

  if (!place) return <div>Place not found</div>;

  return (
    <DetailsContainer>
      <h1>{place.name}</h1>
      <DetailsImage src={place.image} alt={place.name} />
      <p>{place.description}</p>

      <h2>Book Your Visit</h2>
      <BookingForm>
        <BookingInput type="text" placeholder="Your Name" required />
        <BookingInput type="email" placeholder="Your Email" required />
        <BookingInput type="date" placeholder="Booking Date" required />
        <BookingButton type="submit">Submit Booking</BookingButton>
      </BookingForm>
    </DetailsContainer>
  );
}

export default Details;
*/
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const DetailsImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookingInput = styled.input`
  padding: 10px;
  margin: 10px;
  width: 300px;
`;

const BookingButton = styled.button`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4b4b;
  }
`;

const ConfirmationMessage = styled.div`
  margin-top: 20px;
  color: green;
  font-size: 1.2rem;
  font-weight: bold;
`;

const places = [
  { id: 1, name: 'Accessible Hotel', image: '/assets/hotel.jpg', description: 'A beautiful hotel fully equipped for accessibility.' },
  { id: 2, name: 'Wheelchair-Friendly Restaurant', image: '/assets/restaurant.jpg', description: 'A restaurant with accessible seating and restrooms.' },
  { id: 3, name: 'Accessible Park', image: '/assets/park.jpg', description: 'A park with wide paths and ramps.' },
];

function Details() {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id));
  const [bookingCompleted, setBookingCompleted] = useState(false); // Track booking status

  if (!place) return <div>Place not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingCompleted(true); // Display success message
  };

  return (
    <DetailsContainer>
      <h1>{place.name}</h1>
      <DetailsImage src={place.image} alt={place.name} />
      <p>{place.description}</p>

      <h2>Book Your Visit</h2>
      {bookingCompleted ? (
        <ConfirmationMessage>Booking Completed Successfully!</ConfirmationMessage>
      ) : (
        <BookingForm onSubmit={handleSubmit}>
          <BookingInput type="text" placeholder="Your Name" required />
          <BookingInput type="email" placeholder="Your Email" required />
          <BookingInput type="date" placeholder="Booking Date" required />
          <BookingButton type="submit">Submit Booking</BookingButton>
        </BookingForm>
      )}
    </DetailsContainer>
  );
}

export default Details;
