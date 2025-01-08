import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { replace, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance.js";
import Logo from "/Logo.png";
import CalendarIcon from "../assets/landingPage/CalendarIcon.jsx";
import ExpenseIcon from "../assets/landingPage/ExpenseIcon.jsx";
import SchoolIcon from "../assets/landingPage/SchoolIcon.jsx";
import ChoresIcon from "../assets/landingPage/ChoresIcon.jsx";
import NotesIcon from "../assets/landingPage/NotesIcon.jsx";
import HomeIcon from "../assets/landingPage/HomeIcon.jsx";
import ProfileIcon from "../assets/landingPage/ProfileIcon.jsx";
import LogOutIcon from "../assets/landingPage/LogOutIcon.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const [svgColor, svgSize] = ["#d4baff", 32];

  const logout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout", {
        withCredentials: true,
      });

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 100);
    } catch (error) {
      console.error("Error logging out :", error);
    }
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
