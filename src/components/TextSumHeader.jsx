import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

const TextSumHeader = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="500" className='w-screen lg:h-30 p-10 bg-gray-950/50'>
            <div className='flex'>
                <div className='border lg:w-12 lg:h-12 rounded-xl flex justify-center items-center border-violet-900/50 bg-violet-950/50'>
                    <IoDocumentTextOutline className='text-violet-400 text-3xl' />
                </div>
                <div className='ml-5'>
                    <p className='text-gray-300 lg:text-3xl'>Text Summarizer</p>
                    <p className='text-gray-400'>Transform lengthy text into concise summaries</p>
                </div>
            </div>
        </div>
    )
}

export default TextSumHeader