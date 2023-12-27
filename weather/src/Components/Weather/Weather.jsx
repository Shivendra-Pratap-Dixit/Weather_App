import React, { useState } from 'react'
import "./Weather.css"
import Search1 from "../Assets/Search1.png"
import clear from "../Assets/clear.png"
import cloud from "../Assets/cloud.png"
import drizzle from "../Assets/drizzle.png"
import Humidity from "../Assets/Humidity.png"
import Rain from "../Assets/Rain.png"
import Snow from "../Assets/Snow.png"
import Wind from "../Assets/Wind.png"
import press from "../Assets/press.png"
const Weather = () => {
  let apiKey='25f1f9e29ab359612eafc2640440c25c';
  const [wicon ,setwicon]=useState(cloud)
  const search=async()=>{
const element=document.getElementsByClassName("city-input");
if(element[0].value===''){
  return 0
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
let res=await fetch(url);
let data=await res.json();
const humidity=document.getElementsByClassName("humidity-percent");
const wind=document.getElementsByClassName("wind-rate");
const temp=document.getElementsByClassName("weather-temp");
const city=document.getElementsByClassName("weather-location");
const pressure=document.getElementsByClassName("pressure-rate");
humidity[0].innerHTML=data.main.humidity+" %";
temp[0].innerHTML=Math.floor(data.main.temp)+"°C";
wind[0].innerHTML=Math.floor(data.wind.speed*(18/5).toFixed(1))+" Km/h";
city[0].innerHTML=data.name;
pressure[0].innerHTML=data.main.pressure+" mBar"
if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
  setwicon(clear)
}else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
  setwicon(cloud)
}else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
  setwicon(drizzle)
}else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
  setwicon(drizzle)
}else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
  setwicon(Rain)
}else if(data.weather[0].icon==="010d"||data.weather[0].icon==="010n"){
  setwicon(Rain)
}else if(data.weather[0].icon==="013d"||data.weather[0].icon==="013n"){
  setwicon(Snow)
}else{
  setwicon(clear)
}
  }
  return (
    <div className='container'>
      
       <div className="top-bar">
        <input type="text" className="city-input" placeholder='Search City' />
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={Search1} alt="search" style={{width:"50px"}}/>
        </div>
       </div>
       <div className="weather-image">
        <img src={wicon} alt='' style={{width:"150px"}}/>
       </div>
       <div className="weather-temp">24°C</div>
       <div className="weather-location">Lucknow</div>
       <div className="data-container">
        <div className="element">
            <img src={Humidity} alt="" className="icon" style={{width:"80px"}} />
            <div className="data">
                <div className="humidity-percent">62 %</div>
                <div className="text">Humidity</div>
            </div>
            </div>
            <div className="element">
            <img src={Wind} alt="" className="icon" style={{width:"80px"}}/>
            <div className="data">
                <div className="wind-rate">10 Kmph</div>
                <div className="text">Wind Speed</div>
            </div>
            </div>
            <div className="element">
            <img src={press} alt="" className="icon" style={{width:"80px"}}/>
            <div className="data">
                <div className="pressure-rate">1015 mBar</div>
                <div className="text">Atmospheric Pressure</div>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Weather