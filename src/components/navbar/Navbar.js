import React from 'react'

function Navbar() {
  return (
    <div className='h-14 bg-blue-900 flex justify-center'>
        <div className='w-full max-w-5xl text-white flex items-center justify-between'>
            <span className='text-xl font-bold'>
                Booking.com
            </span>
            <div>
            <button className='ml-5 border-0 py-0.5 px-2.5 cursor-pointer rounded text-blue-700 bg-white'>Register</button>
            <button className='ml-5 border-0 py-0.5 px-2.5 cursor-pointer rounded text-blue-700 bg-white'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar