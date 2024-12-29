import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "../component/navbar";

const MainPage = () => {
  console.log("Rendering Protected Route");
  const navigate = useNavigate();
  const bgUrl = "/MainPgImg.png";

  return (
    <div className=" h-screen overflow-hidden flex z-0">
      <div
        className="absolute top-0 left-0 h-full w-[65vw]"
        style={{
          background: "radial-gradient(circle at 0% 0%, #492F79, #0E0219)",
          zIndex: 10,
          //topleft,    topright    bottomright     bottomleft      (length, height)
          clipPath: "polygon(   0 0,       100% 0%,   75% 100%,       0% 100%)",
        }}
      >
      </div>
      <div
        className="absolute top-0 right-0 h-full w-[60vw]"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 5,
        }}
      >
        afljdksald
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full z-20 flex "
        style={{ background: "transparent" }}
      >
        <Navbar />
      </div>
    </div>
  );
};

export default MainPage;
