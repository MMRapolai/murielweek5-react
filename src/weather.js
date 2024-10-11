import React, {useState} from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.main.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
        });
    }
    
    const apiKey = "57b13ef26a049644t26b08bo9241280d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    if (weatherData.ready) {
        return (
            <div className="weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type=" let apiUrl = `htt let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;`;ps://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
                </form>
            <ul>
                <li>Tuesday 20:30</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"/>
                    <div className="float-left">
                <span className="temperature">21</span>
                <span className="unit">°C</span>
                </div>
                </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 30%</li>
                        <li>Wind: 10 km/h</li>
                    </ul>
                </div>
            </div>
            </div>
            );
        } else 
    return "Loading...";}