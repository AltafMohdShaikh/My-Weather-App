import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null; // Render nothing if there's no data

  const { main, wind, name, weather } = weatherData;
  const temperature = main?.temp ? Math.round(main.temp) : null;
  const humidity = main?.humidity;
  const windSpeed = wind?.speed;
  const iconCode = weather[0]?.icon; // Access the icon code
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the full icon URL

  return (
    <div className='items-center text-center flex flex-col justify-center  '>
      <h2>{name}</h2>
      <img src={iconUrl} alt="Weather Icon" />
      <p> {temperature}°C</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};



export default WeatherCard;
