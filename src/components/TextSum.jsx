import React, { useRef, useState } from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoReloadOutline } from "react-icons/io5";
import TextSumHeader from './TextSumHeader';

const TextSum = ({ setText,callApi,summarisedText,responseStatus,setResponseStatus,setSummarisedText }) => {
    const [countWord, setCountWord] = useState(0);
    const [countChar, setCountChar] = useState(0);
    const [showMessage, setShowMessage] = useState(true);
    const [validation,setValidation]=useState(false);
    const [showSummary,setShowSummary]=useState(false);
    const textArea=useRef();

    const handleSummarize=async()=>{
        if(textArea.current.value==""){
            setValidation(true)
            return;
        }
        setShowSummary(false);
        setValidation(false)
        setResponseStatus(false);
        setShowMessage(false);
        await callApi();
        setShowSummary(true);
       
        
       
    }
    const handleTextArea=(e)=>{
        setText(e.target.value);
        setCountChar(e.target.value.length);
        let words=e.target.value.split(" ");
        setCountWord(words.length-1);
    }
    const handleRefresh=()=>{
        textArea.current.value="";
        setSummarisedText("");
        setShowMessage(true);
        setResponseStatus(true);
        setCountChar(0);
        setCountWord(0);
        setValidation(false)
    }
    return (
       <>
       <TextSumHeader/> 
       <div className='lg:p-10 box-border lg:flex gap-10'>
            <div data-aos="zoom-in" data-aos-duration="500"  className='lg:w-120 lg:p-7 lg:h-screen border border-gray-900 rounded-2xl bg-gray-950/50'>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <IoDocumentTextOutline className='text-cyan-400 text-3xl' />
                        <p className='text-white font-semibold ml-2'>Input Text</p>
                    </div>
                    <div className='flex gap-8 font-semibold text-gray-300'>
                        {countWord} words
                        <div>
                            {countChar} chars
                        </div>
                    </div>
                </div>
                <textarea ref={textArea} onChange={handleTextArea}className="placeholder:text-gray-400 lg:w-100 border border-gray-700 rounded-2xl p-5 bg-gray-800/50 text-gray-200 lg:h-120 mt-10" type="text" placeholder='Paste or type your text here... The AI will analyze and create a concise summary for you.' />

                <div className={`${validation?"text-red-500 text-md":"hidden"}`}>
                    Text field is empty! Paste your text and try again. 
                 </div>
                
                

                <div className='flex items-center'>
                    <button onClick={handleSummarize} className='lg:w-85 lg:h-10 text-white bg-linear-to-r from-purple-600 lg:mt-3 to-blue-900 via-indigo-500 flex justify-center items-center cursor-pointer hover:opacity-80 rounded-xl animate-gradient'>
                    <MdOutlineElectricBolt className='text-white text-2xl font-semibold' />
                    <p className='font-semibold ml-2'>Summarize</p>
                </button>
                 <button onClick={handleRefresh} className='flex ml-5 border border-gray-700 bg-gray-800/50 lg:relative top-[7px] rounded-xl justify-center items-center lg:w-10 lg:h-10 cursor-pointer hover:opacity-80'>
                    <IoReloadOutline className='text-gray-500'/>
                </button>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"   className='lg:w-120 lg:p-7 lg:h-screen border border-gray-900 rounded-2xl bg-gray-950/50'>
                <div className='flex'>
                    <MdOutlineElectricBolt className='text-purple-500 text-2xl font-semibold' />
                    <p className='font-semibold ml-2 text-white'>Summary</p>
                </div>
                <div className={`${!responseStatus?"lg:w-100 border border-gray-700 flex justify-center items-center text-white rounded-2xl p-5 bg-gray-800/50 lg:h-120 mt-10":"lg:w-100 border border-gray-700 flex justify-center text-white rounded-2xl p-5 bg-gray-800/50 lg:h-120 mt-10"}`}>
                    <div className='flex items-center'>
                        <div className={`${!showMessage?"hidden":"flex justify-center items-center flex-wrap lg:w-90"}`}>
                        <div className='bg-gray-700/50 w-15 h-15 rounded-full flex mb-3 justify-center items-center'>
                            <MdOutlineElectricBolt className='text-4xl rounded-full text-violet-300' />
                        </div>
                        <p className='text-gray-500 mb-3 text-lg'>Your AI-generated summary will appear here</p>
                        <p className='text-gray-600 text-sm'>Enter text and click "Summarize" to get started</p>
                    </div>
                    </div>

                    <div className={`${!responseStatus?"flex justify-center items-center flex-wrap lg:w-90":"hidden"}`}>
                        <div className='w-15 h-15 rounded-full border-b-5 border-violet-500 flex mb-3 justify-center items-center animate-spin'>
                            <MdOutlineElectricBolt className='counter-spin text-3xl rounded-full text-purple-500' />
                        </div>
                        <p className='text-gray-500 text-lg'>Analyzing and summarizing your text...</p>
                    </div>

                    <div className={`${showSummary?"border-b box-border lg:w-110 lg:h-auto bg-violet-950/50 text-gray-200 border-gray-500 rounded-xl p-5":"hidden"}`}>
                        {summarisedText}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TextSum