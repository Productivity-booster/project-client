import React, { useEffect, useState } from "react";
import Logo from "/Logo.png";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const bg = "./auth/authBg.png";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const setTokenCookie = (token) => {
    Cookies.set("token", token, {
      expires: 7,
      secure: true,
      sameSite: "Strict",
      path : '/'
    });
  };

  useEffect(() => {
    const checkCookie = Cookies.get("token");

    console.log(checkCookie);

    if (checkCookie && Cookies.get("token") != "") {
      return navigate("/", { replace: true });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/auth/login", formData);
      if (
        response.data.message.includes("successful") ||
        (response.data.message.includes("Already") && response.data.token)
      ) {
        setTokenCookie(response.data.token);
        return navigate("/", { replace: true }); // Redirect to main page
      } else {
        setErrorMessage(response.data.message);
        console.log(Cookies.get("token")); // Before removal
        console.log("cookie remove");
        Cookies.remove("token");
        console.log(Cookies.get("token"));
      }
    } catch (error) {
      console.error("Error during login: ", error.response || error);
      setErrorMessage("An error occurred during login. Please try again.");
      Cookies.remove("token");
    }
  };

  return (
    <div
      className="h-screen relative flex flex-col"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(62, 42, 100, 0.25), rgba(74, 52, 116, 0.25))",
        }}
      >
        <div className="relative h-[5rem] bg-[#5f3984]/70 border-b-2 border-[#d4aadc]">
          <div
            className="relative flex w-[35em] bg-[#412d65] h-full"
            style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
          >
            <img
              src={Logo}
              className="relative w-9 h-9 my-auto ml-auto mr-2"
              alt="logo"
            />
            <span className="relative flex text-[#d4baff] mr-auto my-auto w-max pr-[20%] h-max text-3xl font-Handleson">
              Project Requiem Noir
            </span>
          </div>
        </div>

        <div className="lowerContainer flex h-[calc(100%-5rem)] items-center justify-center  text-[#d4aadc]">
          <div className="grid bg-[#533984]/[86%] border-[#d4aadc] border-2 rounded-lg w-[40em] m-auto p-[3em]">
            <h1 className="font-Handleson text-3xl mx-auto mb-5">Log In</h1>

            <form onSubmit={handleSubmit} className="w-full h-full">
              <div className="grid font-Nine mb-5">
                <span className="label-text ml-[0.4rem] text-2xl  text-[#d4aadc]">
                  Username
                </span>
                <input
                  type="text"
                  placeholder="Username . . ."
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="font-Nine border-[1px] border-[#d4aadc] outline-none p-[0.5rem] px-5 bg-transparent rounded-md text-2xl"
                />
              </div>

              <div className="grid font-Nine">
                <span className="label-text ml-[0.4rem] text-2xl  text-[#d4aadc]">
                  Password
                </span>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password . . ."
                  className="font-Nine border-[1px] border-[#d4aadc] outline-none p-[0.5rem] px-5 bg-transparent rounded-md text-2xl "
                />
              </div>

              <div className="text-red-500 m-2">{errorMessage}</div>

              <button
                type="submit"
                className="flex font-Handleson border-2 border-[#d4aadc] px-4 py-2 w-[55%] mx-auto rounded-lg mt-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(62, 42, 100, 0.65), rgba(74, 52, 116, 0.65))",
                }}
              >
                <span className="flex m-auto">Login</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
