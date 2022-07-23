import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  const defaultMessage = "Please Enter Location";
  res.send(defaultMessage);
});

app.get("/getWeatherNYC", async (req, res) => {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=1aa56e24515049f1a2201759221807&q=New York&aqi=no"
  );
  const body = await response.text();
  const parsedBody = JSON.parse(body);
  const temp = parsedBody["current"];
  res.send(temp);
});

//http://api.weatherapi.com/v1/current.json?key=1aa56e24515049f1a2201759221807&q=$%7Blocation%7D&aqi=no%60
app.get("/:id", async (req, res) => {
  const location = req.params.id;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1aa56e24515049f1a2201759221807&q=${location}&aqi=no`
  );
  const body = await response.text();
  const parsedBody = JSON.parse(body);
  let data = {
    temp: "",
    wind: "",
    humidity: "",
    rain: "",
  };
  for (let key in parsedBody.current) {
    if (key === "temp_f") {
      data.temp = parsedBody.current[key].toString();
    }
    if (key === "wind_mph") {
      data.wind = parsedBody.current[key].toString();
    }
    if (key === "humidity") {
      data.humidity = parsedBody.current[key].toString();
    }
    if (key === "condition") {
      data.rain = parsedBody.current[key]["text"].toString();
    }
  }
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
