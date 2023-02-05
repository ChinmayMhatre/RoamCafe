import React from "react";
import styles from "./Cities.module.scss";
import { useState, useEffect } from "react";
import NomadApps from "@components/NomadApps";
import NomadHotels from "@components/NomadHotels";

const Cities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
    const data = await response.json();
    setData(data);
  }
  console.log(data);

  return (
    <div>
      <div className=" flex items-center justify-evenly ">
        <span className="block font-semibold text-center text-base box-content px-4 py-3 border-2 rounded-full box-decoration-slice bg-white">Wifi Speed: 13Mbps </span>
        <span className="block font-semibold text-center text-base box-content px-4 py-3 border-2 rounded-full box-decoration-slice bg-white">AQI: 12.7 </span>
        <span className="block font-semibold text-center text-base box-content px-4 py-3 border-2 rounded-full box-decoration-slice bg-white">
          Temperature: {data.main?.temp}
        </span>
        <span className="block font-semibold text-center text-base box-content px-4 py-3 border-2 rounded-full box-decoration-slice bg-white">Humidity: {data.main?.humidity}</span>
      </div>
      <NomadApps/>
      <NomadHotels/>
    </div>
  );
};

export default Cities;
