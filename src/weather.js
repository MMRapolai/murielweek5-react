import React from "react";
import "./weather.css";

export default function weather() {
    return (
    <div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control"/>
            </div>
            <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary"/>
        </div>
        </div>
        </form>
    <h1>Johannesburg</h1>
    <ul>
        <li>Tuesday 20:30</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
            21°C
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
    )
    ;}
