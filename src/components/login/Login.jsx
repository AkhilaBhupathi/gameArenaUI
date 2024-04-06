import React, { useState } from "react";
import fetchData from "../utils/apiUtils";
import { API } from "../services";
import "../styles/Login.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  function handleUserNameChange({ target }) {
    if (error !== "") setError("");
    setUserName(target.value);
  }

  function handlePhoneChange({ target }) {
    if (error !== "") setError("");
    setPhone(target.value);
  }

  function handleMailChange({ target }) {
    if (error !== "") setError("");
    setMail(target.value);
  }

  function handlePasswordChange({ target }) {
    if (error !== "") setError("");
    setPassword(target.value);
  }

  function handleConfirmPasswordChange({ target }) {
    if (error !== "") setError("");
    setConfirmPassword(target.value);
  }

  function switchForm() {
    setIsRegister(!isRegister);
    setError("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  }

  function loginAction() {
    if (userName.trim() === "" || password.trim() === "") {
      setError("Username and password cannot be empty");
      return;
    }
    fetchData(API.LOGIN, {}, "POST", {
      username: userName,
      password: password,
    })
      .then((data) => {
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("isOnboarded", data.isOnboarded);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log("Error checking", error);
        setError("Something went wrong");
      });
  }

  function handleRegisterAction() {
    if (userName.trim() === "" || password.trim() === "") {
      setError("Username and password cannot be empty");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    fetchData(API.CREATE, {}, "POST", {
      username: userName,
      password: password,
      phone: phone,
      email: mail,
    })
      .then((data) => {
        console.log("Result :", data);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", data.username);
        localStorage.setItem("isOnboarded", data.onboarded);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("Error checking", error);
        setError("Something went wrong");
      });
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h2 className="login-header">{isRegister ? "Register" : "Login"}</h2>
        {isRegister && (
          <>
            <label htmlFor="username" className="login-label">
              Mail
            </label>
            <input
              type="text"
              id="username"
              placeholder="Mail...."
              autoComplete="off"
              className="login-input"
              value={mail}
              onChange={handleMailChange}
            />
            <label htmlFor="username" className="login-label">
              Phone
            </label>
            <input
              type="text"
              id="username"
              placeholder="Phone...."
              autoComplete="off"
              className="login-input"
              value={phone}
              onChange={handlePhoneChange}
            />
          </>
        )}
        <label htmlFor="username" className="login-label">
          User Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username...."
          autoComplete="off"
          className="login-input"
          value={userName}
          onChange={handleUserNameChange}
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password...."
          autoComplete="off"
          className="login-input"
          value={password}
          onChange={handlePasswordChange}
        />
        {isRegister && (
          <>
            <label htmlFor="confirmPassword" className="login-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password...."
              autoComplete="off"
              className="login-input"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </>
        )}
        <div className="login-action-container">
          {isRegister ? (
            <button
              type="button"
              onClick={handleRegisterAction}
              className="login-button"
            >
              Register
            </button>
          ) : (
            <button
              type="button"
              onClick={loginAction}
              className="login-button"
            >
              Login
            </button>
          )}
          <button type="button" className="login-button" onClick={switchForm}>
            {isRegister ? "Login" : "Register"}
          </button>
        </div>
        {error !== "" && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
}
