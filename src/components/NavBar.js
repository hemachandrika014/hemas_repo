import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import logo from '../assets/logo.png';
const logo = '/assets/logo.png';
 // Path to your logo image

// Styled components for the NavBar
const Nav = styled.nav`
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 10px;
`;

const NavLogoText = styled.span`
  color: #fff;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ddd;
  }
`;

const ToggleButton = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 15px;

  &:hover {
    background-color: #555;
  }
`;

// NavBar component with a toggle for high-contrast mode
const NavBar = ({ toggleTheme }) => {
  return (
    <Nav>
      <NavLogo to="/">
        <LogoImage src={logo} alt="Logo" />
        <NavLogoText>Travel</NavLogoText>
      </NavLogo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <ToggleButton onClick={toggleTheme}>Toggle High-Contrast Mode</ToggleButton>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
