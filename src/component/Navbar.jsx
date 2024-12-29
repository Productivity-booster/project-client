import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Logo from '/Logo.png';
import CalendarIcon from "../../public/mainPage/CalendarIcon";
import ExpenseIcon from "../../public/mainPage/ExpenseIcon";
import SchoolIcon from "../../public/mainPage/SchoolIcon";

const Navbar = () => {

  const navigate = useNavigate();
  const [token, setToken] = useState(Cookies.get('token') || "");
  const [svgColor, svgSize] = ["#d4baff", 32];

  // Whenever the token state changes, you can do something, like navigate or reload.
  useEffect(() => {
    if (!token) {
      // If token is empty (after logout), redirect to the home page
      window.location.reload();
    }
  }, [token, navigate]);

  const logout = () => {
    // Remove the cookie
    Cookies.remove("token", { path: "/" });
    console.log("Token after removal:", Cookies.get('token')); // Should be undefined

    // Update the state to trigger useEffect
    setToken(""); // This will trigger the redirect in the useEffect
  };

  return (
    <div className="relative text-white h-full w-[14em]">
      <div className="absolute w-[4.7em] h-[37em] bg-[#635399] border-[#8d8ef8] border-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 rounded-xl">
          <img src={Logo} className="w-[60%] h-auto flex m-auto py-4 border-b-[1px] border-dashed" alt="Logo" />
          <div className="routeList">
            <CalendarIcon color={svgColor} size={svgSize} padding="0.35em"/>
            <ExpenseIcon color={svgColor} size={svgSize} />
            <SchoolIcon color={svgColor} size={svgSize} padding="0.40em"/>

          </div>
      </div>
      <div className="absolute w-[4.7em] h-[37em] bg-red-400 left-1/2 top-1/2 transform -translate-x-[38%] -translate-y-[48%] z-10 rounded-xl"
          style={{
            background : 'linear-gradient(to bottom, #af9fd1, #532f8f)',
            opacity : '17%'
          }}
      >

      </div>
    </div>
  );
};

export default Navbar;

