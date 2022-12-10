import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Search from "./Search";
import WeatherForecast from "./WeatherForecast.js";

function Weather (props){
     const[city, setCity]=useState(props.city);
    const[unit, setUnit]=useState({ready:false});
    function handleResponse(response){
        console.log(response.data)
        setUnit({
               ready:true,
            //    city:response.data.city,
               temperature: response.data.temperature.current,
               wind: response.data.wind.speed,
               humidity: response.data.temperature.humidity,
               description: response.data.condition.description,
               icon:response.data.condition.icon_url,
               date:new Date(response.data.time * 1000),
               city:response.data.city
            })
    }

    function search(){
        const apiKey = "feco5a36c3at9d80680544db0770c40f";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    function submitHandler(event){
         event.preventDefault();
         search();
    }

  function changeHandler(event){
    setCity(event.target.value);
  }


if(unit.ready){
return (
    <div className="Weather">
       <h1>Weather App</h1>
    <div className="main">
      <form className="inputs" onSubmit={submitHandler} >
        <input className="search" type="search" placeholder="Enter a city" onChange={changeHandler}  />
        <input className="submit" type="submit" value="search" />
      </form>
      </div>
     <Search data={unit} />   
     {/* <WeatherForecast data={unit}/> */}
      </div>
);
}else{
search();
return "Loading ...";
}

}

export default Weather;