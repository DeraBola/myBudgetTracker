import React, { createContext, useState } from "react"; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [initialValue, setInitialValue] = useState({
      username: "",
      usergoals: 0,
      userincome: 0
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const login = (name, goals, income) => {
      setInitialValue({...initialValue, username:name, usergoals:goals, userincome:income});
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      setInitialValue({...initialValue, username:'', usergoals:'', userincome:''});
      setIsAuthenticated(false);
    };
  
    const value = { initialValue, isAuthenticated, login, logout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };

 