import React from 'react'

function Forecast() {
  return (
    <div>
        <div className='flex items-center justify-start my-6'>
            <p className='text-white font-medium uppercase'>forecast</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-start'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src="" alt="sun" className='w-12 my-1' />
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast