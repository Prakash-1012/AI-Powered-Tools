import React, { useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { Link } from 'react-router';


const SideBar = () => {
    const[focus1,setFocus1]=useState(true);
    const[focus2,setFocus2]=useState(false);
    const[focus3,setFocus3]=useState(false);
    return (
        <div className='lg:w-70 border p-5 border-purple-950/40 lg:h-full bg-gray-950/50'>

            <Link to="/components/TextSum" defaultChecked={true} onClick={()=>{setFocus1(true);setFocus2(false);setFocus3(false)}} className={`flex items-center p-2 w-60 h-20 rounded-2xl border border-gray-700 ${focus1?"bg-linear-to-r from-purple-600 to-blue-900 via-indigo-500":"bg-gray-900/30 hover:opacity-80"} transition-all  duration-75 ease-in-out lg:mb-3`}>
                <IoDocumentTextOutline className='text-gray-300 text-2xl' />
                <div className='box-border ml-3'>
                    <p className='text-gray-200 font-semibold lg:text-sm'>Text Summarizer</p>
                    <p className='text-gray-300 font-semibold lg:text-sm'>Condense text</p>
                </div>
            </Link>

            <Link to="/components/ImgCapGen" onClick={()=>{setFocus2(true);setFocus1(false);setFocus3(false)}} className={`flex items-center p-2 w-60 h-20 rounded-2xl border border-gray-700 ${focus2?"bg-linear-to-r from-purple-600 to-blue-900 via-indigo-500":"bg-gray-900/30 hover:opacity-80"} transition-all duration-75 ease-in-out lg:mb-3`}>
                <CiImageOn className='text-gray-300 text-2xl' />
                <div className='box-border ml-3'>
                    <p className='text-gray-200 font-semibold lg:text-sm'>Image Captions</p>
                    <p className='text-gray-300 font-semibold lg:text-sm'>Generate Captions</p>
                </div>
            </Link>

            <Link to="/components/CodeExplainer" onClick={()=>{setFocus3(true);setFocus1(false);setFocus2(false)}} className={`flex items-center p-2 w-60 h-20 rounded-2xl border border-gray-700 ${focus3?"bg-linear-to-r from-purple-600 to-blue-900 via-indigo-500":"bg-gray-900/30 hover:opacity-80"} transition-all duration-75 ease-in-out lg:mb-3`}>
                <IoMdCode className='text-gray-300 text-2xl' />
                <div className='box-border ml-3'>
                    <p className='text-gray-200 font-semibold lg:text-sm'>Code Explainer</p>
                    <p className='text-gray-300 font-semibold lg:text-sm'>Understand Code</p>
                </div>
            </Link>
        </div>
    )
}

export default SideBar