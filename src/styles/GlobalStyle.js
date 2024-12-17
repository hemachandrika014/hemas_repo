import { createGlobalStyle } from 'styled-components';

// Create global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: url('/assets/background.jpg'); // This path should work if the image is in public/assets
    background-size: cover;
    background-position: center;
    color: white;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
