import React, { useState } from "react";
 import "./weather.css";
 import axios from "axios";
 
 export default function Weather(props) {
   const [ready, setReady] = useState(false);
   const [weatherData, setWeatherData] = useState({});
   const [city, setCity] = useState(props.defaultCity);
 
   function handleResponse(response) {
     setWeatherData({
       temperature: response.data.temperature.current,
       humidity: response.data.temperature.humidity,
       description: response.data.condition.description,
       iconUrl:
         "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
       wind: response.data.wind.speed,
       city: response.data.city,
     });
     setReady(true);
   }
 
   function handleInputChange(event) {
     setCity(event.target.value)
   }
 
   if (ready) {
     return (
       <div className="Weather">
         <form>
           <div className="row">
             <div className="col-9">
               <input
                 type="search"
                 placeholder="Enter a city name..."
                 className="form-control"
                 autoFocus="on"
                 onChange={handleInputChange}
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
         <h2> {weatherData.city} </h2>
         <ul>
           <li>Monday 17:05</li>
           <li className="text-capitalize"> {weatherData.description} </li>
         </ul>
         <div className="row">
           <div className="col-6">
             <div className="clearfix">
               <img
                 src={weatherData.iconUrl}
                 alt={weatherData.description}
                 className="float-left"
               />
 
               <span className="temperature">
                 {Math.round(weatherData.temperature)}
               </span>
               <span className="unit">℃</span>
             </div>
           </div>
           <div className="col-6">
             <ul>
               <li>Humidity: {weatherData.humidity} </li>
               <li>Wind: {weatherData.wind} </li>
             </ul>
           </div>
         </div>
       </div>
     );
   } else {
     const apiKey = "57b13ef26a049644t26b08bo9241280d";
     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
 
     return "Loading...";
   }
 }
