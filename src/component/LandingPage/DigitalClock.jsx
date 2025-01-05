import React from "react";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date()); //re-render base on change

  useEffect(() => {
    //condition base rendering (dependency array based)
    const timer = setInterval(() => {
      setTime(new Date());
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="SVG w-1/3"></div>
      <div className="time w-2/3 text-white">
        {time.toLocaleTimeString("en-EN", {
          timeZone: "Asia/Bangkok",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </div>
    </div>
  );
};

export default DigitalClock;
