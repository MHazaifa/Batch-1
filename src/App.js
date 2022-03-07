import './App.css';
import {useState} from 'react';
import axios from 'axios';



function App() {
  const [city, setCity] = useState("Lahore");
  const [weather, setWeather] = useState("");

  const Behaviour = (e) => {
    e.preventDefault();

  const axios = require("axios");
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'26691ef000ffff049bef8b9e4e4e2ce5'}`)
      .then(function (response) {
        console.log(response);
        setWeather({
          temp : ((response.data.main.temp - 273.15).toFixed(0)),
          maxi : ((response.data.main.temp_max- 273.15).toFixed(0)),
          mini : ((response.data.main.temp_min- 273.15).toFixed(0)),
        })
      })
      .catch(function (error) {
      console.log(error);
      })
      .then(function () {
      
      });
      
    };
  return (
    <div>
      <h1>{city}</h1>
      <form onSubmit={Behaviour}>
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
     <input type="submit" value="Search"/>
      </form>
    <h1> Temp : {weather.temp}</h1>
    <h2> Maximum : {weather.maxi}</h2>
    <h3> Minimm : {weather.mini}</h3>

    </div>
  );
}
  


export default App;
