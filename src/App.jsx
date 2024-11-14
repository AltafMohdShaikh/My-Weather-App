import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  

  // Fetches weather data
  const getData = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=04f66de2ea5a95467bcc11e97ed5ce95&units=metric');
      setWeatherData(response.data); // Set the weather data in state
  
     
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Call getData when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex items-center  justify-center flex-col '>
      <h1
      className=''>Weather App</h1>
      <div className='border-2 border-black rounded p-1' >
      <div className='border-2 border-black rounded-full'>
      <input className='font-serif text-xs w-24 ml-1 text-center outline-none' type="text" placeholder='City name' />
      <button
      className='text-xs text-white bg-green-500 rounded-full p-2 text-center'>submit</button>
      </div>
     
      <WeatherCard weatherData={weatherData} />
      </div>
    </div>
  );
};
 
export default App;
