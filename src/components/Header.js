import React from 'react';

const Header = ({ handleLoginClick, handleSignupClick, handleSearchChange, handleSearchSubmit, searchQuery }) => (
  <nav>
    <div className='logo'>
      <h1 className="nd">2nd</h1>
      <h1 className="hand">Hand</h1>
      <h1 className="bajar">Bajar</h1>
    </div>
    <form onSubmit={handleSearchSubmit} className="search-form">
      <input
        type="search"
        placeholder="Search Here"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button type="submit">
      </button>
    </form>
    <ul className="nav-links">
      <li onClick={handleLoginClick}>Log In</li>
      <li onClick={handleSignupClick}>Sign Up</li>
      <li>Home</li>
      <li>Category</li>
      <li>Order</li>
      <li>My Profile</li>
      <li>My Cart</li>
      <li>About Us</li>
      <li className="tagline"><u>Quality In Cheap</u></li>
    </ul>
  </nav>
);

export default Header;
