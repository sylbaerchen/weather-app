import React from 'react'

function Inputs({onchangeHandler, value, onkeypress, handleSubmit}) {

  return (
    <div className='flex flex-row justify-center my-6'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row w-3/4 items-center space-x-4'>
          <input  
            type='search'
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
            placeholder='enter city ...' 
            aria-label='enter here ...'
            aria-describedby='basic-addon2'
            name='search'
            value={value}
            onChange={onchangeHandler}
            required
             
                        />
        </div>
        <button type='submit' id='basic-addon2' style={{backgroundColor: 'purple'}}>
          <i>hello</i>
        </button>
      </form>
      <div className='flex flex-row w-1/4 items-center justify-center'>
           {/*  <button name='metric' className='text-xl text-white font-light'>°C</button>
            <p className='text-xl text-white mx-3'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>°F</button> */}
      </div>
    </div>
  )
}

export default Inputs