import React, { useState } from "react";
import backgroundImg from "../assets/img/background.jpeg";

export default function MarvelLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!username.trim()) {
      setErrorMsg("Please enter your username.");
      return;
    }
    if (!password.trim()) {
      setErrorMsg("Please enter your password.");
      return;
    }

    alert(`Welcome, ${username}! You have successfully logged in to the Marvel Store.`);
    setUsername("");
    setPassword("");
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
      <div className="bg-gray-900 rounded-xl shadow-lg p-10 max-w-sm w-full text-center">
        <h1 className="text-6xl text-red-600 mb-2 tracking-widest font-anton">MARVEL</h1>
        <a href="/registration">
        <p className="text-gray-400 mb-8 tracking-wide">Sign in to your account</p></a>

        {errorMsg && (
          <div
            role="alert"
            aria-live="polite"
            className="mb-4 text-red-500 font-bold tracking-wide"
          >
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="username" className="block text-left mb-1 tracking-wide text-white">
            Username
          </label>
          <input
            id="username"
            type="text"
            autoComplete="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-required="true"
          />

          <label htmlFor="password" className="block text-left mb-1 tracking-wide text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-8 px-4 py-3 rounded-md text-white font-bold focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-required="true"
          />

          <button
            type="submit"
            aria-label="Login to Marvel Store"
            className="w-full bg-red-600 hover:bg-red-800 transition-colors text-white font-extrabold py-3 rounded-md tracking-widest"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
