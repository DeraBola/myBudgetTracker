import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthContext } from "./AuthContext/AuthContext";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";

function App() {
  const {isAuthenticated} = useContext(AuthContext);
  console.log(isAuthenticated)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}  />
          <Route path="/" element={<Login />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
