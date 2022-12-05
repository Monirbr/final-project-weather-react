import React from "react";
import FormattedDate from "./FormattedDate";


import "./Weather.css"

export default function Search(props){
    return (
      <div>
        <div className="desc">
          <p className="city">{props.data.city}</p>
          <p className="date">
            <FormattedDate date={props.data.date} /> , {props.data.description}
          </p>
          <p>
            humidity:<span className="humidity"> {props.data.humidity}%</span>
          </p>
          <p>
            wind:<span className="wind"> {props.data.wind}km/h</span>
          </p>
        </div>
        <div className="temp">
          <img className="icon" src={props.data.icon} alt="icon" />
          {Math.round(props.data.temperature)}
          <span>°C</span>
        </div>
      </div>
    );
    
}