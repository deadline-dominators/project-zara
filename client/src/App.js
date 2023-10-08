import React, { useEffect, useState } from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import TopHeader from "./components/TopHeader/TopHeader.js";
import NavBar from "./components/NavBar/NavBar.js";
import SingUp from "./components/SingUp/SingUp.js";
import Singin from "./components/Singin/Singin.js";
import Card from "./components/card/Cards.js";
import Accounts from "./components/account/Accounts.js";
import Home from "./components/HomePage/Home";
// import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact.js"


function App() {
// const [client,setClient]=useState("")
// useEffect(()=>{
//   getOneClient()
// },[])



  const handleSignUp = async (obj) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/ecommerce/singup",
        obj
      );
      
      window.location.href = "/singin";
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSingin = async (obj) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/ecommerce/login",
        obj
      )
      localStorage.setItem("token",response.config.data);
      console.log("here",response.config.data);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div>
      <TopHeader />
      <NavBar />
      <Routes>
        <Route
          path="/singup"
          element={<SingUp handleSignUp={handleSignUp} />}
        />
        <Route
          path="/singin"
          element={<Singin handleSingin={handleSingin} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/account"   element={<Accounts />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

