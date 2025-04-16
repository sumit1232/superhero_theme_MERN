import React, { useState } from "react";
import backgroundImg from "../assets/img/background.jpeg";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });

  const validateEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    const { username, email, password, confirmPassword } = formData;

    if (!username.trim()) {
      setMessage({ text: "Please enter a username.", type: "error" });
      return;
    }
    if (!email.trim()) {
      setMessage({ text: "Please enter your email.", type: "error" });
      return;
    }
    if (!validateEmail(email)) {
      setMessage({ text: "Please enter a valid email address.", type: "error" });
      return;
    }
    if (!password) {
      setMessage({ text: "Please enter a password.", type: "error" });
      return;
    }
    if (password.length < 6) {
      setMessage({ text: "Password must be at least 6 characters.", type: "error" });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    // Simulate successful registration
    setMessage({
      text: `Welcome, ${username}! Your Marvel Store account has been created.`,
      type: "success",
    });
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 to-black px-4 select-none font-extrabold"
          style={{
               backgroundImage: `url(${backgroundImg})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
             }}
     >
      <div
        className="bg-gray-900 rounded-xl shadow-lg p-10 max-w-md w-full text-center"
        role="main"
        aria-label="Marvel Store Registration Form"
      >
        <h1 className="text-6xl text-red-600 mb-2 tracking-widest font-anton">MARVEL</h1>
        <p className="text-gray-400 mb-8 tracking-wide">Create your account</p>

        {message.text && (
          <div
            role="alert"
            aria-live="polite"
            className={`mb-6 font-bold tracking-wide ${
              message.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="username" className="block text-left mb-1 tracking-wide text-white">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-3 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-required="true"
          />

          <label htmlFor="email" className="block text-left mb-1 tracking-wide text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-3 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-required="true"
          />

          <label htmlFor="password" className="block text-left mb-1 tracking-wide text-white">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-6 px-4 py-3 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-required="true"
          />

          <label htmlFor="confirmPassword" className="block text-left mb-1 tracking-wide text-white">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mb-8 px-4 py-3 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-required="true"
          />

          <button
            type="submit"
            aria-label="Register Marvel Store Account"
            className="w-full bg-red-600 hover:bg-red-800 transition-colors text-white font-extrabold py-3 rounded-md tracking-widest"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
