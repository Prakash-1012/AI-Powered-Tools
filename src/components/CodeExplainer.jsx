import React, { useRef, useState } from 'react'
import CodeExpHeader from './CodeExpHeader'
import { IoMdCode } from "react-icons/io";
import { RiCodeAiLine } from "react-icons/ri";
import { IoReloadOutline } from "react-icons/io5";


const CodeExplainer = ({ codeStatus, setCodeStatus, setCode, codeExplain,expCode,setExpCode}) => {
    const [validation, setValidation] = useState(false);
    const [showBg, setShowBg] = useState(true);
    const [showCode,setShowCode]=useState(false);
    
    const codeRef = useRef();
    const handleExplain = async () => {
        if (codeRef.current.value == "") {
            setValidation(true);
            return;
        }
        setShowCode(false);
        setShowBg(false);
        setCodeStatus(false);
        await codeExplain();
        setShowCode(true);
    }
    
    const handleRefresh=()=>{
        codeRef.current.value="";
        setValidation(false);
        // setExpCode("");
        setShowCode(false);
        setShowBg(true);


    }

    return (
        <>
            <CodeExpHeader />
            <div className='lg:p-10 box-border lg:flex gap-10'>
                <div data-aos="zoom-in" data-aos-duration="500" className='lg:w-120 lg:p-7 lg:h-screen border border-gray-900 rounded-2xl bg-gray-950/50'>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <IoMdCode className='text-cyan-400 text-3xl' />
                            <p className='text-white font-semibold ml-2'>Code Input</p>
                        </div>

                    </div>
                    <textarea ref={codeRef} onChange={(e) => setCode(e.target.value)} className="placeholder:text-gray-400 lg:w-100 border border-gray-700 rounded-2xl p-5 bg-gray-800/50 text-white lg:h-120 mt-10" type="text" placeholder='//  Paste your code here . . .
function example(){
    // Your code
}' />

                    <div className={`${validation ? "text-red-500 my-2 text-md" : "hidden"}`}>
                        Code field is empty! Paste your code and try again.
                    </div>
                    <div className='flex gap-8 font-semibold text-sm text-gray-300'>
                         <div className='p-1 rounded-lg bg-gray-800/50'>
                            JavaScript
                         </div>
                         <div className='p-1 rounded-lg bg-gray-800/50'>
                            Python
                         </div>
                         <div className='p-1 rounded-lg bg-gray-800/50'>
                            Java
                         </div>
                         <div className='p-1 rounded-lg bg-gray-800/50'>
                            C++
                         </div>
                         <div className='p-1 rounded-lg bg-gray-800/50'>
                            &more
                         </div>
                        
                    </div>


                    <div className='flex items-center'>
                        <button onClick={handleExplain} className='lg:w-85 lg:h-10 text-white bg-linear-to-r from-purple-600 lg:mt-3 to-blue-900 via-indigo-500 flex justify-center items-center cursor-pointer hover:opacity-80 rounded-xl animate-gradient'>
                            <RiCodeAiLine className='text-white text-2xl font-semibold' />
                            <p className='font-semibold ml-2'>Explain Code</p>
                        </button>
                        <button onClick={handleRefresh} className='flex ml-5 border border-gray-700 bg-gray-800/50 lg:relative top-[7px] rounded-xl justify-center items-center lg:w-10 lg:h-10 cursor-pointer hover:opacity-80'>
                            <IoReloadOutline className='text-gray-500' />
                        </button>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200"  className='lg:w-120 lg:p-7 lg:h-auto border border-gray-900 rounded-2xl bg-gray-950/50 h-auto'>
                    <div className='flex'>
                        <RiCodeAiLine className='text-purple-500 text-3xl font-semibold' />
                        <p className='font-semibold ml-2 text-white'>Explanation</p>
                    </div>
                    <div className={`${"lg:w-100 border border-gray-700 flex justify-center items-center text-white rounded-2xl px-5 bg-gray-800/50 lg:h-120 mt-10"}`}>
                        <div className='flex items-center'>
                            <div className={`${showBg ? "flex justify-center items-center flex-wrap lg:w-90" : "hidden"}`}>
                                <div className='bg-gray-700/50 w-15 h-15 rounded-full flex mb-3 justify-center items-center'>
                                    <RiCodeAiLine className='text-4xl rounded-full text-violet-300' />
                                </div>
                                <p className='text-gray-500 mb-3 text-lg'>Your code explanation will appear here</p>
                                <p className='text-gray-600 text-sm'>Paste code and click "Explain Code" to get started</p>
                            </div>
                        </div>

                        <div className={`${!codeStatus?"flex flex-col justify-center items-center flex-wrap lg:w-90":"hidden"}`}>
                            <div className='w-15 h-15 rounded-full border-b-5 border-violet-500 flex mb-3 justify-center items-center animate-spin'>
                                <RiCodeAiLine className='counter-spin text-3xl rounded-full text-purple-500' />
                            </div>
                            <p className='text-gray-500 text-lg'>Analyzing and explaining your code...</p>
                        </div>

                        <div className={`${showCode?"border-b box-border overflow-scroll lg:w-110 h-100  bg-violet-950/50 border-gray-500 rounded-lg p-5":"hidden"}`}>
                        {expCode}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodeExplainer