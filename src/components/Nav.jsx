import React from 'react'

const Nav = ({ weatherData }) => {
    if (!weatherData) return null;

    const {weather } = weatherData;
    const iconCode = weather[0]?.icon; // Access the icon code
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the full icon URL
  
    return (
      <div className='flex shadow-sm bg-white h-20  items-center justify-between pr-16'>
        
        <img className='size-13' src={iconUrl} alt="Weather Icon" />
        <ul className='style-none flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Nothing</li>
        </ul>
       
      </div>
    );
}

export default Nav
