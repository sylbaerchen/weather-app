import React from 'react'

let d = new Date();
let date = d.getDate();
let year = d.getFullYear();
let month = d.toLocaleString('default', {month: 'long'});
let day = d.toLocaleString('default', {weekday: 'long'})


function TimeAndLocation( ) {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                {day}, {date} {month} {year} 
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>              
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation