import React from "react";
import Breakline from "/mainPage/breakline.png";
const WelcomeContainer = () => {
  return (
    <div className=" relative w-full h-full text-[#cddcff]">
      <div className="h-[75%] grid mt-auto pt-5 ">
        <h1 className="w-max h-max text-5xl mx-auto">WELCOME BACK!</h1>
        <img src={Breakline} className="w-[85%] mx-auto my-2 h-5" alt="" />
        <div className="flex w-[80%] -m-2 mx-[10%]">
          <span className="w-1/2 h-max ">what a lonely morning</span>
          <span className="w-1/2 h-max text-end">Name</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeContainer;
