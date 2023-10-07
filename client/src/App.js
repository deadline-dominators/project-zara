import "./App.css";
import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import axios              from "axios";
import TopHeader          from "./components/TopHeader/TopHeader.js";
import NavBar             from "./components/NavBar/NavBar.js";
import SingUp             from "./components/SingUp/SingUp.js";
import Singin             from "./components/Singin/Singin.js";
import Cards              from "./components/card/Cards.js";
import Accounts           from "./components/account/Accounts.js";
import Home               from "./components/HomePage/Home";
import About              from './components/about/About'
import Footer             from "./components/Footer/Footer";
import ProductsDetails    from "./components/productDetails/ProductsDetails";
import Contact            from "./components/contact/Contact.js";
import Error              from "./components/error 404/Error.js";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = async (obj) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/ecommerce/singup",
        obj
      );
      navigate('/singin');
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
      );
      localStorage.setItem("token", response.data.response.data);
      console.log(response.data.response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <TopHeader />
      <NavBar />

      <TransitionGroup className="transition-group">
        {/* CSSTransition for each route */}
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          appear
        >
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
        <Route path="/card" element={<Cards />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails" element={<ProductsDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
