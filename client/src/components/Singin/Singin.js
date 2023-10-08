import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assests/dl.beatsnoop 1.png";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";
import "./Singin.css";
import axios from "axios";

const Singin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingin = async (obj) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/ecommerce/login",
        obj
      );
      localStorage.setItem("token", response.data.response.data);
      console.log(response.data.response.data);
      if (response.status === 200) {
        // Redirect to the home page or any other desired page
        navigate("/");
      }
      if (!email || !password) {
        // Display an error message or prevent the form submission
        console.log("Email and password are required.");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singin-container">
      <div className="singin-img">
        <LazyLoad height={200}>
          <img src={image} alt="" loading="lazy" />
        </LazyLoad>
      </div>
      <div className="singin-form">
        <div className="singin-text">
          <h1> Log in to Exclusive </h1>
          <p>Enter your details below </p>
        </div>
        <input
          placeholder="Email or Phone Number"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="btn-forget">
          <button
            className="singin-button"
            onClick={() => {
              handleSingin({ email: email, password: password });
            }}
          >
            {" "}
            Log in{" "}
          </button>
          {/* Provide the correct path/route for password reset */}
          <Link to="/password-reset">Forgot password? </Link>
        </div>
      </div>
    </div>
  );
};

export default Singin;
