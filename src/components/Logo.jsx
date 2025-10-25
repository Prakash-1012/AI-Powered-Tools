import React from 'react'
import { LuBrain } from "react-icons/lu";

const Logo = () => {
  return (
    <div className='lg:w-70 border lg:h-30 items-center pl-5 border-purple-950/40  bg-gray-950/50 flex'> 
          <LuBrain className='bg-linear-to-br w-11 h-10 rounded-xl text-slate-800 from-purple-500  to-blue-900 via-indigo-500 animate-gradient'/>
          <span className='text-xl ml-2 box-border text-gray-300 font-bold'>BrainWave AI</span>  
    </div>
  )
}

export default Logo