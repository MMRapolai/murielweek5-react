import React, {useState} from "react";
 import "./WeatherForecast.css";
 import axios from "axios";
 
 export default function WeatherForecast(props) {
   const [forecast, setForecast] = useState(null);
   function handleResponse(response) {
     setForecast(response.data.daily)
   }
 
   function getForecast() {
     let apiKey = "57b13ef26a049644t26b08bo9241280d";
     let longitude = props.coordinates.longitude;
     let latitude = props.coordinates.latitude;
     let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
 
     axios.get(apiUrl).then(handleResponse);
   }
 
   if(forecast) {
     return (
       <div className="WeatherForecast">
         <div className="row">
           <div className="col">
             <div className="WeatherForecast-day">Thu</div>
             <div className="WeatherIcon">
               <img
                 src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecast[0].condition.icon}.png`}
                 alt={forecast[0].condition.description}
               />
             </div>
           </div>
           <div className="WeatherForecast-temperatures">
             <span className="WeatherForecast-temperature-max">19°</span>
             <span className="WeatherForecast-temperature-min">10°</span>
           </div>
         </div>
       </div>
     );
   } else {
     getForecast()
     return "Loading..."
   }
 
 }
