import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from "../axiosInstance.js";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = Cookies.get("token");  // Token is fetched here

  // UseEffect to verify token when component mounts
  useEffect(() => {
    // if (!token || token === "") {
    //     if(token === ""){
    //         Cookies.remove('token');
    //     }
    //   setIsValid(false);
    //   return; 
    // }


    // Function to verify token with the server
    const verifyToken = async () => {
      try {
        const res = await axiosInstance.get('/auth/verify');
        if (res.data.verification === true) {
            setIsValid(true); 
        } else {
            Cookies.remove('token', {path : '/'});
            setIsValid(false); 
        }
      } catch (error) {
            console.error(error);
            Cookies.remove('token', {path : '/'});
            setIsValid(false); 
      }
    };

    verifyToken();

  }, [token]); 

  if (isValid === null) return <div>Loading...</div>;

  if (isValid === false) return <Navigate to="/login" replace />;

  // If token is valid, render the children components
  return children;
};

export default ProtectedRoute;
