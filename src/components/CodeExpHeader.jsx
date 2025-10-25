import React from 'react'
import { IoMdCode } from "react-icons/io";

const CodeExpHeader = () => {
  return (
  <div className='w-screen lg:h-30 p-10 bg-gray-950/50'>
              <div className='flex'>
                  <div className='border lg:w-12 lg:h-12 rounded-xl flex justify-center items-center border-violet-900/50 bg-violet-950/50'>
                      <IoMdCode className='text-violet-400 text-3xl' />
                  </div>
                  <div className='ml-5'>
                      <p className='text-gray-300 lg:text-3xl'>Code Explainer</p>
                      <p className='text-gray-400'>Get detailed explanations of your code</p>
                  </div>
              </div>
          </div>
  )
}

export default CodeExpHeader