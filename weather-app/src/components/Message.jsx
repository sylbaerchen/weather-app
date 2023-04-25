import React from 'react'

function Message({message}) {
   
  return (
    <div className='flex bg-cyan-800 text-zinc-100 rounded-lg p-4'>
        <p>{message}</p>
    </div>
  )
}

export default Message