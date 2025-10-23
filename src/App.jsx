import {React} from 'react'
import { GoogleGenAI } from '@google/genai';
import "./index.css";
import Logo from './components/Logo';
import SideBar from './components/SideBar';
import TextSumHeader from './components/TextSumHeader';
import TextSum from './components/TextSum';
import { useState } from 'react';
function App() {
  const [text,setText]=useState();
  const [summarisedText,setSummarisedText]=useState();
  const[responseStatus,setResponseStatus]=useState(true);

  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genai = new GoogleGenAI({ apiKey });
  console.log(genai);

  const callApi= async()=>{
    let response=await genai.chats.modelsModule.generateContent({
      model:"gemini-2.5-flash",
      contents:`Read the following text and create a **short, engaging summary and also write the percentage and words reduced in the end in a new line:${text}`
    }); 
    setResponseStatus(true);
    setSummarisedText(response.text);
    alert("Summary generated successfully")
  }
  return (
    <div className='w-full h-full bg-linear-to-br lg:flex from-gray-950 via-violet-950 to-gray-900 '>
     <div className='lg:w-70'>
       <Logo/>
      <SideBar/>
     </div>
      <main>
        <TextSumHeader/>
        <TextSum setResponseStatus={setResponseStatus} responseStatus={responseStatus} text={text} summarisedText={summarisedText} setText={setText} callApi={callApi} setSummarisedText={setSummarisedText}/>
      </main>
    </div>
  )
}

export default App