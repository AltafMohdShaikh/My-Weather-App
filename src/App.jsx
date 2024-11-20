import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Nav from './components/Nav';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("mumbai")

  const submit = (e) => {
    e.preventDefault(); 
    setCity(search);
}  

  // Fetches weather data
  const getData = async (cityname) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=04f66de2ea5a95467bcc11e97ed5ce95&units=metric`);
      setWeatherData(response.data); // Set the weather data in state
     
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("City not found. Please enter a valid city name.");
      } else {
        console.error("Error fetching weather data:", error);
      }
    }
  };

  // Call getData when component mounts
  useEffect(() => {
    getData(city);
  }, [city]);

  return (
    <div className=' bg-red-50 h-screen '>
    <Nav weatherData={weatherData} />
    <div className='flex items-center   flex-col '>
      
      <h1
      className='font-Bungee text-slate-500 text-5xl mt-10  mb-10'>Weather App</h1>
      <div className='border-2 border-black rounded p-1 glass-effect bg-white shadow-solid' >
      <div className='border-2 border-black rounded-full'>
      <input onChange={(e)=>{
        setSearch(e.target.value)
      }} className='font-serif text-xs w-24 ml-1 text-center outline-none' type="text" placeholder='City name' />
      <button onClick={submit}
      className='text-xs text-white bg-green-500 rounded-full p-2 text-center'
      >submit</button>
      </div>
     
      <WeatherCard weatherData={weatherData} />
      </div>
    </div>
    
      </div>
  );
};
 
export default App;
