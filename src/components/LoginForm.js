import React from 'react';
import './LoginForm.css';

const LoginForm = () => (
  <div id="login-form" className="form-container login-form">
    <form className="log">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" placeholder="Enter full name" name="username" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" name="password" required />
      <br />
      <input type="submit" value="Sign In" />
      <p><a href="#" onClick={(e) => e.preventDefault()}><u>Forgot Your Password?</u></a></p>
    </form>
  </div>
);

export default LoginForm;
