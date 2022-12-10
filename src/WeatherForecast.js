import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    return (
      <div classname="forecast-temp">
        <hr/>
        <div className="forecast">
          <div className="col1">
            <p className="forecast-day">Tue</p>
            <img className="forecast-icon"  src={props.data.icon} />
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
}