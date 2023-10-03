import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import TopHeader from "./components/TopHeader/TopHeader.js";
import NavBar from "./components/NavBar/NavBar.js";
import SingUp from "./components/SingUp/SingUp.js";
import Singin from "./components/Singin/Singin.js";
import Card from "./components/card/Card.js";
import Account from "./components/account/Account.js";
function App() {
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
      );
      localStorage.setItem("token", response.data.response.data);
      window.location.href = "/mainPage";
      console.log(response.data.response.data);
    } catch (error) {
      throw error;
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
        <Route path="/card" element={<Card />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}
export default App;
