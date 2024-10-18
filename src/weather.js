import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
const [weatherData, setweatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
setweatherData({
ready: true,
temperature: response.data.temperature.current,
humidity: response.data.temperature.humidity,
date: new Date(response.data.time * 1000),
description: response.data.condition.description,
iconUrl: "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
wind: response.data.wind.speed,
city: response.data.city,
});
}
function handleSubmit(event) {
event.preventDefault();
search();
}
function handleCityChange(event) {
setCity(event.target.value);
}

function search() {
const apiKey = "57b13ef26a049644t26b08bo9241280d";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}
if (weatherData.ready) {
return (
<div className="weather">
<form onSubmit={handleSubmit}>
<div className="row">
<div className="col-9">
<input 
type="search"
placeholder="Enter a city..."
className="form-control" 
autoFocus="on"
onChange={handleCityChange}
/>
</div>
<div className="col-3">
<input 
type="submit" 
value="Search" 
className="btn btn-primary w-100"
/>
</div>
</div>
</form>
<WeatherInfo data={weatherData} />
</div>
);
} else {
search();
return "Loading...";}
}
