import "./App.css";
import TopHeader from "./components/TopHeader/TopHeader.js";
import NavBar from "./components/NavBar/NavBar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Contact from "./components/HomePage/Contact";

function App() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
