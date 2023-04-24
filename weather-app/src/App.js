import React, {useEffect, useState} from 'react'
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


const fetchWeather = (event) => {
  if (event.key === 'Enter') {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(response => response.json()).then(data=> {
      setWeatherData(data)
      console.log(data)
    })
  }
}

  
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl'>
      <TopButtons/>
      <Inputs  
      
      onchangeHandler={e => setCity(e.target.value)} 
      value={city} 
      onkeypress={fetchWeather}/>
      {typeof weatherData.main === 'undefined' ? (
        <h1>Hello and welcome!</h1>  // TODO add greetings
      ) : (
      <div>
       <TimeAndLocation />
       {/* <p>{weatherData.main.temp}</p> */}
       <TemperatureAndDetails name={weatherData.name} temperature={weatherData.main.temp} feels={weatherData.main.feels_like} humidity={weatherData.main.humidity} wind={weatherData.wind.speed} max={weatherData.main.temp_max} min={weatherData.main.temp_min}/>
       <Forecast/>
       <Forecast/>     
     </div>) }
     {weatherData.cod === '404' && <p>Sorry, city not found :( Please try again!</p> }
   
    </div>
     )
  }

export default App 