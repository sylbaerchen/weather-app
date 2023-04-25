import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,    
    UilLocationPoint,
} from '@iconscout/react-unicons/';

function TemperatureAndDetails({name, temperature, feels, humidity, wind, max, min, sky, wemoji, country}) {

let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});


  return (
    <div className=''>
        <div className='flex items-center justify-start text-3xl pt-6 pb-3  text-cyan-100'>
        <UilLocationPoint size={25} className='hidden sm:flex text-white cursor-pointer transition ease-out hover:scale-125 mr-3 left-10'/>
            <h5>{name},</h5> 
        </div>
        <div className='flex items-center justify-start text-xl pb-6 text-cyan-100'>
            <h5 className='sm:ml-10'>{regionNames.of(country)}</h5> 
        </div>
        <div className='flex items-center justify-center text-7xl py-6 text-cyan-300'>
            <h1>{sky}</h1> 
        </div>
    
        <div className='flex flex-row  items-center justify-between text-white py-3'>
            <div>
            <img src={wemoji} alt='sun' className='w-20'/>
          <p className='text-5xl'>{temperature}°</p>
            </div>
          
          <div className='flex flex-col space-y-2 items-start'>
            <div className='flex font-light text-lg items-center justify-center'>
                <UilTemperature size={36} className='mr-1 '/>
                Feels like: <span className=' ml-1'>{feels}°</span>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-center space-x-2 text-white text-sm py-3'>
        
        <div className='flex items-center gap-1'>
        <UilWind/>
        <p className='font-light'>
                Wind: <span className='font-medium ml-1'>{wind}km/h</span>
            </p>
            <p className='font-light hidden sm:flex'>|</p>
        </div>
        <div className='flex items-center gap-1'>
        <UilTear/>
            <p className='font-light'>
            Humidity: <span className='font-medium ml-1'>{humidity}%</span>
            </p>
            <p className='hidden sm:flex font-light'>|</p>
        </div>
        <div className='flex items-center gap-1'>
        <UilSun/>
            <p className='font-light'>
                Max: <span className='font-medium ml-1'>{max}°</span>
            </p>
            <p className='font-light hidden sm:flex'>|</p> 
        </div>
        <div className='flex items-center gap-1'>
            <UilSun/>
            <p className='font-light'>
                Min: <span className='font-medium ml-1'>{min}°</span>
            </p>
            </div>                 
                    </div>
    </div>
  )
}

export default TemperatureAndDetails