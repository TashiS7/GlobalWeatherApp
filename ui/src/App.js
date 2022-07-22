import { useEffect, useState } from "react";
import Weather from "./Weather";
import Form from "./Form";
import "./Styles/App.css";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const grabCity = (value) => {
    setCity(value);
  };
  const locationWeather = (value) => {
    setTemp(value);
  };
  return (
    <div className="App">
      <h1 className="main-header">Global Weather Forecast! 🌤</h1>
      <Form getTemp={temp} locationForm={grabCity} />
      <Weather grabTemp={locationWeather} sendLocation={city} />
    </div>
  );
}

export default App;
