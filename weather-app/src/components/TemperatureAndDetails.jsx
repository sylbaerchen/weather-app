import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons/';

function TemperatureAndDetails({name, temperature, feels, humidity, wind, max, min, sky, wemoji}) {

    
  return (
    <div>
        <div className='flex items-center justify-start text-3xl py-6 text-cyan-100'>
            <h5>{name}</h5> 
        </div>
        <div className='flex items-center justify-center text-7xl py-6 text-cyan-300'>
            <h1>{sky}</h1> 
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
          <img src={wemoji} alt='sun' className='w-20'/>
          <p className='text-5xl'>{temperature}°</p>
          <div className='flex flex-col space-y-2 items-start'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className='mr-1'/>
                Feels like: <span className='font-medium ml-1'>{feels}°</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className='mr-1'/>
                Humidity <span className='font-medium ml-1'>{humidity}%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className='mr-1'/>
                Wind: <span className='font-medium ml-1'>{wind}km/h</span>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>06:45 AM</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>07:45 PM</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>
                Max: <span className='font-medium ml-1'>{max}°</span>
            </p>
            <p className='font-light'>|</p>      
            <UilSun/>
            <p className='font-light'>
                Min: <span className='font-medium ml-1'>{min}°</span>
            </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails