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
  const temp = parsedBody["current"]["temp_f"];
  res.send(temp.toString());
});

//`http://api.weatherapi.com/v1/current.json?key=1aa56e24515049f1a2201759221807&q=${location}&aqi=no`
app.get("/:id", async (req, res) => {
  const location = req.params.id;

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1aa56e24515049f1a2201759221807&q=${req.params.id}&aqi=no`
  );
  const body = await response.text();
  const parsedBody = JSON.parse(body);
  let temp = "";
  for (let key in parsedBody.current) {
    if (key === "temp_f") {
      temp = parsedBody.current[key].toString();
    }
  }
  res.send(temp);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
