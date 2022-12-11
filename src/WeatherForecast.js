import axios from "axios";
import React,{useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded , setLoaded] = useState(false);
  let[forecast, setForecast] = useState(null);
function responseHandler(response){
  setForecast(response.data.daily)
  setLoaded(true);
}


if(loaded){
 console.log(forecast)
   return (
     <div classname="forecast-temp">
       <hr />
       <div className="forecast">
         <div className="col1">
          <WeatherForecastDay data = {forecast[0]} />
           </div>
         <div className="col1">
           <p className="forecast-day">Tue</p>
           <img className="forecast-icon" src={props.data.icon} />
           <div classname="forecast-temp">
             <span className="max">{Math.round(props.data.temperature)}°</span>
             <span className="min">{Math.round(props.data.temperature)}°</span>
           </div>
         </div>
         <div className="col1">
           <p className="forecast-day">Tue</p>
           <img className="forecast-icon" src={props.data.icon} />
           <div classname="forecast-temp">
             <span className="max">{Math.round(props.data.temperature)}°</span>
             <span className="min">{Math.round(props.data.temperature)}°</span>
           </div>
         </div>
         <div className="col1">
           <p className="forecast-day">Tue</p>
           <img className="forecast-icon" src={props.data.icon} />
           <div classname="forecast-temp">
             <span className="max">{Math.round(props.data.temperature)}°</span>
             <span className="min">{Math.round(props.data.temperature)}°</span>
           </div>
         </div>
         <div className="col1">
           <p className="forecast-day">Tue</p>
           <img className="forecast-icon" src={props.data.icon} />
           <div classname="forecast-temp">
             <span className="max">{Math.round(props.data.temperature)}°</span>
             <span className="min">{Math.round(props.data.temperature)}°</span>
           </div>
         </div>
       </div>
     </div>
   );
    

}else{
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.name}&key=feco5a36c3at9d80680544db0770c40f&units=metric`;
  axios.get(apiUrl).then(responseHandler);
  return null;
 
}
}