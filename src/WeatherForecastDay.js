import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temperature.maximum);
        return  `${temperature}°`;
    }
    function minTemp() {
      let temperature = Math.round(props.data.temperature.minimum);
      return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon" , " Tue" , "Wed", "Thu" , "Sat"];
        return days[day];
    }
    return (
      <div className="col1">
        <p className="forecast-day">{day()}</p>
        <img className="forecast-icon" src={props.data.condition.icon_url} />
        <div classname="temperature" >
          <span className="max">
            {maxTemp()}
          </span>
          <span className="min">
            {minTemp()}
          </span>
        </div>
      </div>
    );
}