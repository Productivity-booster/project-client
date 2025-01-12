import axios from "axios";
import React, { useEffect, useState } from "react";
import SunnyIcon from "../../assets/landingPage/weather_svg/SunnyIcon";
import CloudyIcon from "../../assets/landingPage/weather_svg/CloudyIcon";
import RainyIcon from "../../assets/landingPage/weather_svg/RainyIcon";
import FreezingRainIcon from "../../assets/landingPage/weather_svg/FreezingRainIcon";
import ThunderstormsIcon from "../../assets/landingPage/weather_svg/ThunderstormsIcon";
import MistyIcon from "../../assets/landingPage/weather_svg/MistyIcon";
import SnowyIcon from "../../assets/landingPage/weather_svg/SnowyIcon";

const WeatherWidget = () => {
  const [weatherAPI, setWeatherAPI] = useState({}); //return obj type {}
  const [weatherIconCode, setWeatherIconCode] = useState();

  const sunnyList = [1000];
  const cloudyList = [1003, 1006, 1009];
  const rainorshowerList = [
    1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246,
  ];
  const freezingRainList = [
    1069, 1168, 1171, 1198, 1201, 1204, 1207, 1249, 1252,
  ];
  const thunderstormList = [1087, 1273, 1276, 1279, 1282];
  const mistList = [1030, 1135, 1147];
  const [width, height] = [57, 57];
  // const snowList = [
  //   1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1261, 1264,
  // ];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_WEATHER_API_URL}/current.json?key=${
            import.meta.env.VITE_WEATHER_API
          }&q=Bangkok`
        );

        setWeatherAPI(response.data.current);
        setWeatherIconCode(response.data.current.condition.code);

        // console.log(response.data.current.condition.code);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div
      className="w-[75%] mx-auto h-full rounded-lg mt-[6%] ml-auto mr-[4%] flex"
      style={{
        background: "linear-gradient(-45deg, #492f79, #1e0634, #1b0332)",
      }}
    >
      <div className="h-[90%] w-2/3  my-2">
        <span className="temp text-2xl text-[#cddcff] ml-4 mt-4">
          {weatherAPI.temp_c}°C
        </span>
        <div className="text-[#cbc5f2] ml-7 text-sm">
          <div>· Wind:{weatherAPI.wind_kph}km/h</div>
          <div>· Humidity:{weatherAPI.humidity}%</div>
        </div>
      </div>
      <div className="icon w-1/3 border-l-[1px] border-dashed border-[#cddcff] my-4 mx-2">
        {weatherIconCode && sunnyList.includes(weatherIconCode) ? (
          <SunnyIcon width={width} height={height} />
        ) : cloudyList.includes(weatherIconCode) ? (
          <CloudyIcon width={width} height={height} />
        ) : rainorshowerList.includes(weatherIconCode) ? (
          <RainyIcon width={width} height={height} />
        ) : freezingRainList.includes(weatherIconCode) ? (
          <FreezingRainIcon width={width} height={height} />
        ) : thunderstormList.includes(weatherIconCode) ? (
          <ThunderstormsIcon width={width} height={height} />
        ) : mistList.includes(weatherIconCode) ? (
          <MistyIcon width={width} height={height} />
        ) : (
          <SnowyIcon width={width} height={height} />
        )}
      </div>
    </div>
  );
};
export default WeatherWidget;
