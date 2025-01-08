import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../axiosInstance.js";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null); 

  useEffect(() => {

    const verifyToken = async () => {
      try {
        const res = await axiosInstance.get('/auth/checkToken', { withCredentials: true }); 
        if (res.data.verification === true) {
          setIsValid(true); 
        } else {
          setIsValid(false); 
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsValid(false); 
      }
    };

    verifyToken(); 
  }, []); 

  if (isValid === null) return <div>Loading...</div>; 

  if (isValid === false) return <Navigate to="/login" replace />; 

  return children; 
};

export default ProtectedRoute;
