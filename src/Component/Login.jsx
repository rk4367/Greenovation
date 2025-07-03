import React, { useState } from "react";
import "../Css/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__centered">
        <img
          className="login__spark"
          src="/public/images/spark-icon.svg"
          alt="Walmart Spark"
        />
        <h2 className="login__title">Sign in or create your account</h2>
        <p className="login__subtitle">
          Not sure if you have an account? Enter your phone number or email and we'll check for you.
        </p>
        <form className="login__form">
          <label htmlFor="loginInput" className="login__label">Phone number or email</label>
          <input
            id="loginInput"
            className="login__input"
            type="text"
            autoComplete="username"
            required
          />
          <button className="login__continueButton" type="submit">
            Continue
          </button>
        </form>
        <p className="login__privacy">
          Securing your personal information is our priority.<br />
          <a href="#" className="login__privacyLink">See our privacy measures.</a>
        </p>
      </div>
      <footer className="login__footer">
        <div className="login__footerLinks">
          <span>© 2025 Walmart. All Rights Reserved.</span>
          <a href="#">Give feedback</a>
          <a href="#">CA Privacy Rights</a>
          <a href="#">Your Privacy Choices</a>
          <a href="#">Notice at Collection</a>
          <a href="#">Request My Personal Information</a>
          <a href="#">Delete Account</a>
          <a href="#">California Supply Chains Act</a>
        </div>
      </footer>
    </div>
  );
}

export default Login;