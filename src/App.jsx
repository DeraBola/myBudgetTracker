import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
// import UserContext from "./userContext/UserContext";
function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route exact path="/" element={<Login />} /> 
           <Route exact path="home" element={<Home />} />       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
