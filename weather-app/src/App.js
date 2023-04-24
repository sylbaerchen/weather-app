import React, {useState} from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Forecast from './components/Forecast'

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
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
      <TopButtons/>
      <Inputs />
      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forecast/>
      <Forecast/>
      <input 
      className='input' 
      placeholder='Enter city ...' 
      onChange={e => setCity(e.target.value)} 
      value={city} 
      onKeyPress={getWeather}
      />
    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p className='text-2xl font-bold text-pink-500'>Welcome to Weather App! Please enter a city to get the weather</p>
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