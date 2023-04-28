import React, {useState} from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import Greetings from './components/Greetings'
import { UilBolt } from '@iconscout/react-unicons'
import Message from './components/Message'

function App() {
const apiKey = process.env.REACT_APP_APIKEY

const [weatherData, setWeatherData] = useState([{}])
const [city, setCity] = useState('')


const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(response => response.json()).then(data=> {
      setWeatherData(data)
    })
}

const handleSubmit = (e) => {
  e.preventDefault();
  fetchWeather();
  setCity('')
};

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
} else if(weatherData.weather[0].main === 'Fog' || weatherData.weather[0].main === 'Mist') {
  emoji = "/mist.png" 
} else {
  emoji = "/cloud-sun.png"
}}

let bgStyles = 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-br from-blue-700 to-blue-700 min-h-screen shadow-xl'
if(typeof weatherData.main != 'undefined') {
  if(weatherData.weather[0].main === 'Clouds') {
  bgStyles = 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-b from-cyan-700 to-cyan-900 min-h-screen shadow-xl'    
} else if(weatherData.weather[0].main === 'Thunderstorm') {
  bgStyles = 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-b from-fuchsia-800 to-fuchsia-950 min-h-screen shadow-xl'    
} else if(weatherData.weather[0].main === 'Rain'  ) {
  bgStyles = 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-b from-teal-600 to-teal-900 min-h-screen shadow-xl'    
} else if(weatherData.weather[0].main === 'Snow' || weatherData.weather[0].main === 'Fog' || weatherData.weather[0].main === 'Mist') {
  bgStyles = 'flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-b from-stone-400 to-stone-700 min-h-screen shadow-xl'  
} else {
  bgStyles = "flex flex-col justify-center md:shrink-0 mx-auto max-w-screen-md pt-16 py-5 px-8 sm:px-32 bg-gradient-to-br from-blue-700 to-blue-700 min-h-screen shadow-xl"
}}

let message = ''
if(typeof weatherData.main != 'undefined') {
if(weatherData.weather[0].main === 'Thunderstorm') {
  message = 'Uh-oh it is stormy outside! Be careful ⚡'    
} else if(weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Drizzle' ) {
  message = 'Singing in the rain ... take an umbrella with you! 🚿'    
} else if(weatherData.weather[0].main === 'Snow') {
  message = bgStyles = 'Let it snow, let it snow, let it snow! ☃️'  
}}



  return (
    <div className='bg-gradient-to-b from-cyan-200 via-blue-300 to-blue-600'>
    <div className={bgStyles}>
      <Inputs     
      onchangeHandler={e => setCity(e.target.value)} 
      value={city} 
      handleSubmit={handleSubmit}
      />
      {typeof weatherData.main === 'undefined' ? (
       <Greetings/> 
      ) : (
      <div>
       <TimeAndLocation />
       <Message message={message}/>
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
      <footer className='flex text-xs text-stone-100 border-2 py-3 px-3 my-8 max-w-fit rounded-md'>
        <hr/>
        <ul>
          <li>
            <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Icons created by DinosoftLabs - Flaticon</a>
          </li>
        </ul>
      </footer>  
     </div>) 
     }
     {weatherData.cod === '404' && 
     <div className='flex bg-red-500 border-2 py-6 px-3 my-8'>
        <UilBolt size={32} className='mr-1 text-white'/>
        <p className='text-white'>Sorry, city not found ... please try again!</p>    
     </div>
      }
    </div>
    </div>
   
     )
  }

export default App 

