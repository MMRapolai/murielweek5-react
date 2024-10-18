import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    console.log(props)
    return (
        <div className="weatherInfo">
            <h1>{props.data.city}</h1>
    <ul>
    <li>
    <FormattedDate date={props.data.date} />
    </li>
    <li className="text-capitalize">{props.data.description}</li>
    </ul>
    <div className="row mt-3">
    <div className="col-6">
    <div className="d-flex">
    <img src={props.data.iconUrl} 
    alt={props.data.description} 
    className="float-left"
    />
    <div className="float-left">
    <span className="temperature">
    {Math.round(props.data.temperature)}
    </span>
    <span className="unit">°C</span>
    </div>
    </div>
    </div>
    <div className="col-4">
    <ul>
    <li>Humidity: {props.data.humidity}%</li>
    <li>Wind: {props.data.wind} km/h</li>
    </ul>
    </div>
    </div> 
    </div>
    );
}