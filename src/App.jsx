import {React} from 'react'
import { GoogleGenAI } from '@google/genai';
import "./index.css";
import Logo from './components/Logo';
import SideBar from './components/SideBar';
import TextSum from './components/TextSum';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import ImgCapGen from './components/ImgCapGen';
import CodeExplainer from './components/CodeExplainer';
function App() {
  const [text,setText]=useState();
  const [summarisedText,setSummarisedText]=useState();
  const[responseStatus,setResponseStatus]=useState(true);
  const [file,setFile]=useState();
  

  
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

  const genCaption= async()=>{
    let response=await genai.chats.modelsModule.generateContent({
      model:"gemini-2.5-flash",
      contents:`Take a look at this image and generate a 2-3 lines caption for this image:${file}`
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
        <Routes>
          <Route path='/' element={<TextSum setResponseStatus={setResponseStatus} responseStatus={responseStatus} text={text} summarisedText={summarisedText} setText={setText} callApi={callApi} setSummarisedText={setSummarisedText}/>}/>
          <Route path='/components/TextSum' element={<TextSum setResponseStatus={setResponseStatus} responseStatus={responseStatus} text={text} summarisedText={summarisedText} setText={setText} callApi={callApi} setSummarisedText={setSummarisedText}/>}/>
          <Route path='/components/ImgCapGen' element={<ImgCapGen setFile={setFile}/>}/>
          <Route path='/components/CodeExplainer' element={<CodeExplainer/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App