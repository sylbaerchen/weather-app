import React, {useState} from 'react'

function App() {

  const apiKey = process.env.REACT_APP_APIKEY
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')

  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(response => response.json()).then(data=> {
        setWeatherData(data)
      })
    }
  }
  
  return (
    <div className='container'>
      <input 
      className='input' 
      placeholder='Enter city ...' 
      onChange={e => setCity(e.target.value)} 
      value={city} 
      onKeyPress={getWeather}
      />
    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Welcome to Weather App! Please enter a city to get the weather</p>
      </div>
    ) : (
      <div className='weather-data'>
        <p>{weatherData.name}</p>
        <p>{Math.round(weatherData.main.temp)} Celsius</p>
        <p>{weatherData.weather[0].main} </p>
        </div>
    )}  
    {weatherData.cod === '404' && <p>City not Found :(</p> }
    </div>
    )

  }

export default App 