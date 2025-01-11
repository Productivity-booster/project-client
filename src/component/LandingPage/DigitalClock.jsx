import React from "react";
import { useState, useEffect } from "react";

import MorningEveningIcon from "../../assets/landingPage/clock_svg/MorningEveningIcon";
import AfternoonIcon from "../../assets/landingPage/clock_svg/AfternoonIcon";
import NightIcon from "../../assets/landingPage/clock_svg/NightIcon";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date()); //re-render base on change
  const [width, height] = [57, 57];

  useEffect(() => {
    //condition base rendering (dependency array based)
    const timer = setInterval(() => {
      setTime(new Date());
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-full rounded-xl flex "
      style={{ background: "linear-gradient(to bottom, #3e2a64, #4a3474)" }}
    >
      <div className="w-[88%] flex h-max m-auto">
        <div className="w-max h-max ml-auto">
          {(time && time.getHours() >= 5 && time.getHours() <= 9) ||
          (time.getHours() >= 18 && time.getHours() <= 21) ? (
            <MorningEveningIcon width={width} height={height} />
          ) : time.getHours() >= 9 && time.getHours() <= 17 ? (
            <AfternoonIcon width={width} height={height} />
          ) : (
            <NightIcon width={width} height={height} />
          )}
        </div>
        <div className="time w-max h-max text-[#cbc5f2] ml-4 mr-auto text-end text-6xl font-SevenExtraTight">
          {time
            .toLocaleTimeString("it-IT", {
              timeZone: "Asia/Bangkok",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .replace(/( AM| PM)/, "")}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
