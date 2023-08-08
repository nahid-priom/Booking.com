import React from 'react'

const MailList = () => {
  return (
    <div className='w-full mt-12 bg-blue-900 text-white flex flex-col items-center gap-5 p-12'> 
        <h1 className='text-3xl text-white font-bold'>Save time, Save money</h1>
        <span className='text-base text-white font-light'>Sign up and we 'll send the best deals to you</span>
        <div>
            <input type='text' placeholder='Your Email' className='w-72 h-7 p-2.5 border-0 mr-2.5'/>
            <button className='h-7 bg-blue-400 text-white font-bold border-0 rounded cursor-pointer px-2.5'>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList