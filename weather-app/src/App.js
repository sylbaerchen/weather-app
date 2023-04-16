import React, {useState} from 'react'

function App() {

  const apiKey = ''
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')


  return (
    <div className='container'>
      <input className='input' placeholder='Enter city ...'/>
    </div>
    )
  
}

export default App 