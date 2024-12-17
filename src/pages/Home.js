import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
`;

const StartButton = styled(Link)`
  padding: 10px 20px;
  background-color: #ff6b6b;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 1rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Accessible Travel</Title>
      <Description>Find accessible travel destinations that meet your needs and enjoy your trips without limitations.</Description>
      <StartButton to="/search">Start Exploring</StartButton>
    </HomeContainer>
  );
}

export default Home;
