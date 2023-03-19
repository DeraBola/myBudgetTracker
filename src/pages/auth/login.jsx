import React from "react";
import LoginImg from "../../assets/img/loginAvi.svg";

function Login() {
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center w-full">
      <div className="flex shadow-lg max-w-3xl">
        <div className="w-1/2 bg-[#f3ecc5]">
          <img src={LoginImg} alt="" />
        </div>
        <div className="w-1/2 bg-[#1E1E1E] py-2">
          <h2 className="text-[#fff]">Monthly <span className="text-[#51D289]">Budget</span></h2>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-[#fff] py-2">
              <input
                className="appearance-none bg-transparent border-none w-50 text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="insert your income"
                aria-label="income"
              />
            </div>
            <div className="flex items-center border-b border-[#fff] py-2">
              <input
                className="appearance-none bg-transparent border-none w-50 text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="insert your income"
                aria-label="income"
              />
            </div>
            <div className="flex items-center border-b border-[#fff] py-2">
              <input
                className="appearance-none bg-transparent border-none w-50 text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="insert your income"
                aria-label="income"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
