import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ItemGrid from './components/ItemGrid';

// Import images
import mbImg from './images/mb.jpg';
import tableFanImg from './images/table-fan.jpg';
import tvImg from './images/tv.jpeg';

const images = {
  mbImg,
  tableFanImg,
  tvImg,
};

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(prevState => !prevState);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(prevState => !prevState);
    setShowLoginForm(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="App">
      <Header
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
      />

      {showLoginForm && <LoginForm />}
      {showSignupForm && <SignupForm />}

      <ItemGrid images={images} />
      <h1>hello</h1>
      <h1>hellk</h1>

    </div>
  );
}

export default App;
