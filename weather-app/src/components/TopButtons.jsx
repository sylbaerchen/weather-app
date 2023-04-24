import React from 'react'

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'London',
        },
        {
            id: 2,
            title: 'Berlin',
        },
        {
            id: 3,
            title: 'Milan',
        },
        {
            id: 4,
            title: 'Tokyo',
        },
        {
            id: 5,
            title: 'Sydney',
        },
    ]
  return (

    <div className='flex items-center justify-around my-6'>
    {cities.map((city) => (
    <button key='id' className='text-white text-lg font-medium'>{city.title}</button>
    ))} 
    </div>
  )
}

export default TopButtons