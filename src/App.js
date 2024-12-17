/*import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Search from './pages/Search'; // Import Search component
import Review from './pages/Review'; // Import Review component
import Details from './pages/Details'; // Import Details component
import NavBar from './components/NavBar'; // Import NavBar
import GlobalStyle from './styles/GlobalStyle'; // Import global styles
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// Define light and dark themes
const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff',
};

// Apply global theme styles
const GlobalThemeStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme); // Default theme

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalThemeStyle />
      <Router>
        <NavBar toggleTheme={toggleTheme} /> {/* Passing toggleTheme to NavBar 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} /> {/* Add Search route *
          <Route path="/review" element={<Review />} /> {/* Add Review route *
          <Route path="/details/:id" element={<Details />} /> {/* Add Details route *
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;*/


/*import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Search from './pages/Search';
import Details from './pages/Details';
import Review from './pages/Review';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// Themes for light and dark modes
const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff',
};

const GlobalThemeStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme); // Default to light theme
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if logged in

  // Toggle light/dark theme
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  // Simulate login (no authentication check)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalThemeStyle />
      <Router>
        {isAuthenticated ? (
          // Main website pages after login
          <>
            <NavBar toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/details" element={<Details />} />
              <Route path="/review" element={<Review />} />
            </Routes>
          </>
        ) : (
          // Display login page if not authenticated
          <Login onLogin={handleLogin} />
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Search from './pages/Search';
import Details from './pages/Details';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  background: '#000000',
  color: '#ffffff',
};

const GlobalThemeStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalThemeStyle />
      <Router>
        {isAuthenticated ? (
          <>
            <NavBar toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/details/:id" element={<Details />} /> {/* Route with ID */}
            </Routes>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;

