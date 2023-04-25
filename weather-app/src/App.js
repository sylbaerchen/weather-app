import React, {useState} from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Greetings from './components/Greetings'
import { UilBolt } from '@iconscout/react-unicons'
import { data } from 'autoprefixer'

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

let emoji = null;
if(typeof weatherData.main != 'undefined') {
if(weatherData.weather[0].main === 'Clear') {
  emoji = "/sun.png" 
} else if(weatherData.weather[0].main === 'Clouds') {
  emoji = "/cloud.png" 
} else if(weatherData.weather[0].main === 'Thunderstorm') {
  emoji = "/thunder.png" 
} else if(weatherData.weather[0].main === 'Drizzle') {
  emoji = "/drizzle.png" 
} else if(weatherData.weather[0].main === 'Rain') {
  emoji = "/shower.png" 
} else if(weatherData.weather[0].main === 'Snow') {
  emoji = "/snow.png" 
} else {
  emoji = "/cloud-sun.png"
}}

  return (
    <div className={ weatherData.main != 'undefined' && weatherData.weather[0].main === 'Clear' ? 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-br from-cyan-700 to-blue-700 min-h-screen shadow-xl' : weatherData.weather[0].main === 'Clouds' ? 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-br from-stone-500 to-stone-700 min-h-screen shadow-xl' :  'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-br from-red-700 to-pink-700 min-h-screen shadow-xl'}>
      <Inputs     
      onchangeHandler={e => setCity(e.target.value)} 
      value={city} 
      onkeypress={fetchWeather}
      />
      {typeof weatherData.main === 'undefined' ? (
       <Greetings/> 
      ) : (
      <div>
       <TimeAndLocation />
       <TemperatureAndDetails 
       name={weatherData.name} 
       country={weatherData.sys.country}
       sky={weatherData.weather[0].main}
       wemoji={emoji}
       temperature={Math.round(weatherData.main.temp)} 
       feels={Math.round(weatherData.main.feels_like)} 
       humidity={Math.round(weatherData.main.humidity)} 
       wind={weatherData.wind.speed} 
       max={Math.round(weatherData.main.temp_max)} 
       min={Math.round(weatherData.main.temp_min)}/>
     </div>) }
     {weatherData.cod === '404' && 
     <div className='flex bg-red-500 border-2 py-6 px-3 my-8'>
        <UilBolt size={32} className='mr-1 text-white'/>
        <p className='text-white'>Sorry, city not found ... please try again!</p>    
     </div>
      }
   
    </div>
     )
  }

export default App 

/* credits */
{/* <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by DinosoftLabs - Flaticon</a> */}