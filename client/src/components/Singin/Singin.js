import React, { useState } from "react";
import image from "../../assests/dl.beatsnoop 1.png";
import LazyLoad from "react-lazyload";
import "./Singin.css";
const Singin = ({ handleSingin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="singin-container">
      <div className="singin-img">
        <LazyLoad height={200}>
          <img src={image} alt=""  loading="lazy" />
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
          <a href="reset">Forget password? </a>
        </div>
      </div>
    </div>
  );
};
export default Singin;
