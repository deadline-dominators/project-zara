import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader.js";
import NavBar from "./components/NavBar/NavBar.js";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/card.js"
import Account from "./components/Account/account.js"



function App() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Routes>

           {/* <Route path="/" element={<Home />} /> */}
          <Route path="/card" element={<Card />} /> 
          <Route path="/account" element={<Account />} /> 
        </Routes>
    </>
  );
}

export default App;