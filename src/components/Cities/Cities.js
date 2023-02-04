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
      `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
    );
    const data = await response.json();
    setData(data);
  }
  console.log(data);

  return (
    <div>
      <div className="">
        <span>Wifi Speed: 13Mbps </span>
        <span>AQI: 12.7 </span>
        <span className="weather">
          Temperature: {data.main?.temp} Humidity: {data.main?.humidity}
        </span>
      </div>
      <NomadApps/>
      <NomadHotels/>
    </div>
  );
};

export default Cities;
