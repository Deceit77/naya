import React from 'react';
import './SignupForm.css';

const SignupForm = () => (
  <div id="signup-form" className="form-container signup-form">
    <form>
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" placeholder="Enter full name" name="name" required />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="sample1@example.com" name="email" required />
      <br />
      <label htmlFor="phone">Phone Number:</label>
      <input type="text" id="phone" placeholder="98********" name="phone" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="signup-password" placeholder="Set Your Password" name="password" required />
      <br />
      <input type="submit" value="Sign Up" />
    </form>
  </div>
);

export default SignupForm;
