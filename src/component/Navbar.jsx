import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Logo from "/Logo.png";
import CalendarIcon from "../../public/mainPage/CalendarIcon.jsx";
import ExpenseIcon from "../../public/mainPage/ExpenseIcon.jsx";
import SchoolIcon from "../../public/mainPage/SchoolIcon.jsx";
import ChoresIcon from "../../public/mainPage/ChoresIcon.jsx";
import NotesIcon from "../../public/mainPage/NotesIcon.jsx";
import HomeIcon from "../../public/mainPage/HomeIcon.jsx";
import ProfileIcon from "../../public/mainPage/ProfileIcon.jsx";
import LogOutIcon from "../../public/mainPage/LogOutIcon.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(Cookies.get("token") || "");
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
    console.log("Token after removal:", Cookies.get("token")); // Should be undefined

    // Update the state to trigger useEffect
    setToken(""); // This will trigger the redirect in the useEffect
  };

  return (
    <div className="relative text-white h-full w-[14em] z-0">
      <div className="absolute w-[4.7em] h-[36em] bg-[#6945a4]/66 border-[#140020]/[46%] border-2 left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <img
          src={Logo}
          className="w-[60%] h-auto flex m-auto py-4 border-b-[1px] border-dashed"
          alt="Logo"
        />
        <div className="grid gap-y-4 py-4 w-[60%] m-auto border-b-[1px] border-dashed">
          <CalendarIcon color={svgColor} size={svgSize} padding="0.35em" />
          <ExpenseIcon color={svgColor} size={svgSize} />
          <SchoolIcon color={svgColor} size={svgSize} padding="0.40em" />
          <ChoresIcon color={svgColor} size={svgSize} padding="0.40em" />
          <NotesIcon color={svgColor} size={svgSize} padding="0.30em" />
        </div>
        <div className="grid gap-y-4 py-4 w-[60%] m-auto border-b-[1px] border-dashed">
          <HomeIcon color={svgColor} size={svgSize} />
        </div>
        <div className="grid gap-y-4 py-4 w-[60%] m-auto">
          <ProfileIcon color={svgColor} size={svgSize} />
          <LogOutIcon color={svgColor} size={svgSize} logoutfunct={logout} />
        </div>
      </div>
      <div
        className="absolute w-[4.7em] h-[36em] left-1/2 top-1/2 transform -translate-x-[38%] -translate-y-[48%] z-0 rounded-xl"
        style={{
          background: "linear-gradient(to bottom, #af9fd1, #532f8f)",
          opacity: "36%",
        }}
      ></div>
    </div>
  );
};

export default Navbar;
