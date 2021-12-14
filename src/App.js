import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState([]);
  

  const fetchData = async () => {
    const { data } = await axios.get('http://api.weatherapi.com/v1/current.json?key=a477e41344f24cd49d9211308211412&q=London&aqi=no'
    )
    console.log(data)
    setWeather(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }



  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search"
          />
        </div>
        <div className='location-box'>
          <div className='location'>{weather.location.name}</div>
          <div className='date'>{dateBuilder((new Date()))}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            {weather.current.temp_c}°C
          </div>
          <div className='descr'>
            {weather.current.condition.text}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
