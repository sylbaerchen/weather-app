import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs({onchangeHandler, value, onkeypress}) {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center space-x-4'>
            <input 
            onChange={onchangeHandler} 
            type='text' 
            placeholder='enter city ...' 
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' 
            value={value} 
            onKeyDown={onkeypress}/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-3'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button>
        </div>
    </div>
  )
}

export default Inputs