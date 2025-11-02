import React from 'react'
import HomeHeader from './HomeHeader'
import { PiStarFour } from "react-icons/pi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { IoMdCode } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className='lg:w-screen h-full lg:flex max-lg:text-center justify-center'>
        <div className="w-150" >
          <div className='flex lg:w-70 max-lg:w-70 lg:h-13 max-lg:h-13 border-2 border-violet-900/80 bg-violet-900/20 rounded-full justify-center items-center mt-10 max-lg:relative max-lg:left-15'>
            <PiStarFour className='text-violet-400 ' />
            <p className='text-violet-400 ml-3 font-semibold'>Powered by Advanced AI</p>
          </div>
          <div className='mt-10 lg:w-200 w-105 relative lg:right-40 max-lg:right-4'>
            <span className='text-gray-200 max-lg:text-5xl lg:text-7xl'>Welcome to <span className='lg:text-7xl max-lg:text-5xl bg-clip-text text-transparent bg-linear-to-r from-violet-500 to-cyan-500 via-violet-400 animate-gradient'>AI Toolkit</span></span>
          </div>
          <div className='text-gray-400 lg:text-4xl max-lg:text-2xl mt-10 text-center lg:w-300 relative lg:right-105 max-lg:left-10 max-lg:w-80 h-10 lg:h-5'>
            <span>Unlock the power of artificial intelligence with our suite of tools designed to
              <span className='lg:hidden'> summarize, analyze, explain, and assist.</span>
            </span>
            <p className='max-lg:hidden'>summarize, analyze, explain, and assist.</p>
          </div>
          <div className='flex gap-7 mt-10'>
            <Link to="/components/TextSum" className='mt-20 flex w-42 lg:h-13 p-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-900 via-indigo-500 animate-gradient items-center hover:opacity-80'>
              <MdOutlineElectricBolt className='text-gray-200 text-2xl' />
              <p className='ml-2 text-2xl text-gray-200 '>Get Started</p>
            </Link>
            <div className='mt-20 flex w-42 lg:h-13 p-2 rounded-xl border bg-gray-800/50 border-gray-500 items-center'>
              <LuBrain className='text-gray-400 text-2xl' />
              <p className='ml-2 text-2xl text-gray-200 '>Learn More</p>
            </div>
          </div>
          <div className='flex gap-20 w-400 relative right-160 justify-center mt-20'>
            <div className='w-70 mt-5 h-40 border rounded-xl flex text-2xl flex-col p-3 gap-5 items-center justify-center font-semibold text-gray-200 border-violet-900/80 bg-gray-950/50'>
              <p>3+</p>
              <p className='text-gray-400'>AI Tools</p>
            </div>
            <div className='w-70 mt-5 h-40 border rounded-xl flex text-2xl flex-col p-3 gap-5 items-center justify-center font-semibold text-gray-200 border-violet-900/80 bg-gray-950/50'>
              <p>Instant</p>
              <p className='text-gray-400'>Processing speed</p>
            </div>
            <div className='w-70 mt-5 h-40 border rounded-xl flex text-2xl flex-col p-3 gap-5 items-center justify-center font-semibold text-gray-200 border-violet-900/80 bg-gray-950/50'>
              <p>99%</p>
              <p className='text-gray-400'>Accuracy</p>
            </div>
            <div className='w-70 mt-5 h-40 border rounded-xl flex text-2xl flex-col p-3 gap-5 items-center justify-center font-semibold text-gray-200 border-violet-900/80 bg-gray-950/50'>
              <p>10+</p>
              <p className='text-gray-400'>Languages</p>
            </div>
          </div>
          <div className='text-gray-200 text-5xl mt-20  lg:relative right-17'>
            <p>Explore Our AI Tools</p>
          </div>
          <div className='grid grid-cols-2 lg:w-370 h-150 mt-10 relative right-130'>
            <Link to="/components/TextSum" className='w-175 h-150 bg-gray-950/50 rounded-2xl border-gray-700 border hover:border-violet-500/80 p-10 transition-all duration-150 ease-in-out'>
              <div className='flex lg:w-130 justify-center'>
                <div className='border lg:w-25 lg:h-17 rounded-xl flex justify-center items-center border-violet-900/50 bg-violet-800/20'>
                  <IoDocumentTextOutline className='text-violet-400 text-5xl' />
                </div>
                <div className='text-gray-200 text-4xl ml-5 font-semibold'>Text Summarizer
                  <div className='text-2xl mt-5 text-gray-400'>
                    Transform lengthy documents into concise, digestible summaries powered by advanced AI.
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-3 mt-10 text-xl text-gray-300'>
                <div>
                  Adjustable length
                </div>
                <div>
                  Instant Results
                </div>
                <div>
                  Word count tracking
                </div>
              </div>
              <div className='lg:h-15 flex items-center justify-between p-3 rounded-xl font-semibold text-gray-200 text-2xl hover:bg-gray-950/50 mt-25'>
                Try Text Summarizer
                <FaArrowRight className='opacity-80 hover:opacity-100'/>
              </div>
            </Link>
            {/* ImgCapGen */}
            <Link to="/components/ImgCapGen" className='w-175 h-150 bg-gray-950/50 rounded-2xl border-gray-700 border hover:border-cyan-500 p-10 transition-all duration-150 ease-in-out'>
              <div className='flex lg:w-130 justify-center'>
                <div className='border lg:w-25 lg:h-17 rounded-xl flex justify-center items-center border-cyan-900/50 bg-cyan-800/20'>
                  <CiImageOn className='text-cyan-500 text-5xl' />
                </div>
                <div className='text-gray-200 text-4xl ml-5 font-semibold'>Image Captions
                  <div className='text-2xl mt-5 text-gray-400'>
                    Transform lengthy documents into concise, digestible summaries powered by advanced AI.
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-3 mt-10 text-xl text-gray-300'>
                <div>
                  Drag & Drop
                </div>
                <div>
                  Auto tags
                </div>
                <div>
                  Creative descriptions
                </div>
              </div>
              <div className='lg:h-15 flex items-center justify-between p-3 rounded-xl font-semibold text-gray-200 text-2xl hover:bg-gray-950/50 mt-25'>
                Try Image Captions
                <FaArrowRight className="opacity-80"/>
              </div>
            </Link>
          </div>

           <div className='grid grid-cols-2 w-370 h-150 mt-10 relative right-130'>
            {/* Code Explainer */}
            <Link to="/components/CodeExplainer" className='w-175 h-150 bg-gray-950/50 rounded-2xl border-gray-700 border hover:border-pink-500/80 p-10 transition-all duration-150 ease-in-out'>
              <div className='flex lg:w-130 justify-center'>
                <div className='border lg:w-25 lg:h-17 rounded-xl flex justify-center items-center border-pink-900/50 bg-pink-800/20'>
                  <IoMdCode className='text-pink-400 text-5xl' />
                </div>
                <div className='text-gray-200 text-4xl ml-5 font-semibold'>Code Explainer
                  <div className='text-2xl mt-5 text-gray-400'>
                   Get detailed explanations of code in any programming language, instantly.
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-3 mt-10 text-xl text-gray-300'>
                <div>
                  Multi Language
                </div>
                <div>
                  Step-by-step
                </div>
                <div>
                  Best practices
                </div>
              </div>
              <div className='lg:h-15 flex items-center justify-between p-3 rounded-xl font-semibold text-gray-200 text-2xl hover:bg-gray-950/50 mt-25'>
                Try Code Explainer
                <FaArrowRight className='opacity-80 hover:opacity-100'/>
              </div>
            </Link>
            {/* Chatbot */}
            <Link to="/components/ImgCapGen" className='w-175 h-150 bg-gray-950/50 rounded-2xl border-gray-700 border hover:border-blue-500 p-10 transition-all duration-150 ease-in-out'>
              <div className='flex lg:w-130 justify-center'>
                <div className='border lg:w-25 lg:h-17 rounded-xl flex justify-center items-center border-blue-900/50 bg-blue-800/20'>
                  <FiMessageSquare className='text-blue-500 text-5xl' />
                </div>
                <div className='text-gray-200 text-4xl ml-5 font-semibold'>AI Chatbot
                  <div className='text-2xl mt-5 text-gray-400'>
                    Have natural conversations with an intelligent AI assistant ready to help.
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-3 mt-10 text-xl text-gray-300'>
                <div>
                  Real-time chat
                </div>
                <div>
                  Context aware
                </div>
                <div>
                  Instant responses
                </div>
              </div>
              <div className='lg:h-15 flex items-center justify-between p-3 rounded-xl font-semibold text-gray-200 text-2xl hover:bg-gray-950/50 mt-25'>
                Try AI Chatbot
                <FaArrowRight className="opacity-80"/>
              </div>
            </Link>
          </div>
          <div className='lg:w-370 lg:h-150 p-10 flex flex-col justify-center items-center lg:relative right-130 bg-linear-to-r from-violet-900/70 to-violet-950 rounded-2xl mt-20 box-border'>
              <div>
                <BsStars className='text-7xl font-bold text-violet-500'/>
              </div>
              <div className='text-5xl mt-10 font-light text-gray-200'>
                Why Choose AI Toolkit
              </div>
              <div className='text-4xl mt-10 text-gray-400 text-center'>
                Our cutting-edge AI technology provides accurate, fast, and reliable results for all your content processing needs.
              </div>
              <div className='flex gap-40'>
                  <div className='mt-10 flex flex-col gap-5 justify-center items-center'>
                    <div className='border lg:w-20 lg:h-20 rounded-xl flex justify-center items-center border-violet-900/50 bg-gray-950/50'>
                    <MdOutlineElectricBolt className='text-5xl text-violet-500'/>
                    </div>
                    <p className='text-3xl text-gray-200'>Lightning Fast</p>
                    <p className='text-2xl text-gray-400 lg:w-80 text-center'>Get results in seconds, not minutes</p>
                  </div>

                  <div className='mt-10 flex flex-col gap-5 justify-center items-center'>
                    <div className='border lg:w-20 lg:h-20 rounded-xl flex justify-center items-center border-violet-900/50 bg-gray-950/50'>
                    <LuBrain className='text-5xl text-violet-500'/>
                    </div>
                    <p className='text-3xl text-gray-200'>Smart AI</p>
                    <p className='text-2xl text-gray-400 lg:w-80 text-center'>Advanced models trained on vast datasets</p>
                  </div>

                  <div className='mt-10 flex flex-col gap-5 justify-center items-center'>
                    <div className='border lg:w-20 lg:h-20 rounded-xl flex justify-center items-center border-violet-900/50 bg-gray-950/50'>
                    <BsStars className='text-5xl text-violet-500'/>
                    </div>
                    <p className='text-3xl text-gray-200'>Easy to Use</p>
                    <p className='text-2xl text-gray-400 lg:w-80 text-center'>Intuitive interface, no setup required</p>
                  </div>
              </div>
          </div>
          <div className='lg:w-370 lg:h-150 p-10 flex flex-col justify-center items-center lg:relative right-130 bg-linear-to-r from-violet-900/70 to-violet-950 rounded-2xl mt-20 box-border mb-20'>
            <div className='text-5xl text-gray-200'>
              Ready to get started?
            </div>
            <div className='text-4xl text-gray-400 lg:w-300 text-center mt-20'>
              Choose any tool from the sidebar or click below to start with our most popular feature.
            </div>
            <Link to="/components/TextSum" className='lg:w-310 h-20 mt-20 bg-linear-to-r from-purple-600 to-blue-900 via-indigo-500 flex justify-center items-center rounded-2xl animate-gradient hover:opacity-80 '>
              <BsStars className='text-4xl font-bold text-white'/>
              <span className='text-white text-4xl'>Start with Text Summarizer</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home