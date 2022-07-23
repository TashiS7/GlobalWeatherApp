import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Form.css";

const Weather = (props) => {
  const [weather, setWeather] = useState("0");
  const [location, setLocation] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [rain, setRain] = useState("");

  useEffect(() => {
    setLocation(props.sendLocation);
    if (location === "") {
      axios.get("/").then((res) => {});
    } else {
      axios
        .get(`/${location}`)
        .catch(function (error) {
          console.log(error.toJSON());
        })
        .then((res) => {
          setWeather(res.data.temp);
          setHumidity(res.data.humidity);
          setWind(res.data.wind);
          setRain(res.data.rain);
        });
    }

    // console.log(weather)
  });

  return (
    <div>
      <h1>
        Current weather in {location} is: {weather} F
      </h1>
      <h4>Wind: {wind} mph 💨🍃</h4>
      <h4>Humidity: {humidity}</h4>
      <h4>Rain: {rain}</h4>
    </div>
  );
};
export default Weather;
