import axios from "axios";
import React,{useState , useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded , setLoaded] = useState(false);
  let[forecast, setForecast] = useState(null);
  
  useEffect(() =>{
    setLoaded(false);
  },[props.name])

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
        {forecast.map(function(dailyForecast, index){
          if(index < 5){
            return(
            <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
            );
          }
          
        })}
        </div>
      </div>
         );
      }
      else{
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.name}&key=feco5a36c3at9d80680544db0770c40f&units=metric`;
        axios.get(apiUrl).then(responseHandler);
        return null;
      
       }
}