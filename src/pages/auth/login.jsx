import React, {useContext} from "react";
import LoginImg from "../../assets/img/loginAvi.svg";
// import { UserContext } from "../../userContext/UserContext";
function Login() {
  // const user = useContext(UserContext)
  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center w-full">
      <div className="flex flex-col lg:flex-row shadow-lg max-w-3xl ">
        <div className="w-full lg:w-1/2 bg-[#f3ecc5] sm:block hidden">
          <img src={LoginImg} alt="" />
        </div>
        <div className="w-full lg:w-1/2 bg-[#1E1E1E] flex flex-col p-8 items-center ">
          <h2 className="text-[#FFF] my-14 mb-8 text-3xl">Monthly <span className="text-[#51D289]">Budget</span></h2>
          <form className="w-full flex flex-col items-center">
            <div className="flex items-center border-b border-[#fff] mb-7">
              <input
                className=" appearance-none bg-transparent border-none w-50 ml-10 text-[#fff] py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="insert your income"
                aria-label="income"
              />
            </div>
            <div className="flex items-center border-b border-[#fff] mb-7">
              <input
                className="appearance-none bg-transparent border-none w-50 ml-10 text-[#fff] py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="insert your income"
                aria-label="income"
              />
            </div>
            <div className="flex items-center border-b border-[#fff] mb-7">
              <input
                className="appearance-none bg-transparent border-none w-50 ml-10 text-[#fff] py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="insert your income"
                aria-label="income"
              />
            </div>
          </form>
          <button className="bg-[#FFE600] text-[#000] px-9 mt-4 py-2 h-8 flex items-center w-50">
            Start Your Calculation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
