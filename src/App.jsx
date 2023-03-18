import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
           <Route exact path="/" element={<Login />} />        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
