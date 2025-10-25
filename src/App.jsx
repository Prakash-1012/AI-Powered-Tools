import {React} from 'react'
import { GoogleGenAI } from '@google/genai';
import OpenAI from "openai";
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
  const [caption,setCaption]=useState();
  const [responseStatus,setResponseStatus]=useState(true);
  const [url,setURL]=useState();

  const [code,setCode]=useState();
  const [expCode,setExpCode]=useState();
  const [codeStatus,setCodeStatus]=useState(true);



  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genai = new GoogleGenAI({ apiKey });
  console.log(genai);

  const client = new OpenAI({
  apiKey:"sk-abcdef1234567890abcdef1234567890abcdef12", 
  dangerouslyAllowBrowser: true,
});

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
   const response = await client.chat.completions.create({
   model: "gpt-4o",
   messages: [{ role: "user", content: `Read the image in the provided URL and generate a 2-3 line caption for social media post,make sure you generate only caption no extra text because i want to display the caption text on my applications' UI,:${url}` }],
});
  
    setCaption(response.choices[0].message.content)
    // setResponseStatus(true);
    // alert("Summary generated successfully")
  }
  const codeExplain=async()=>{
      let response=await genai.chats.modelsModule.generateContent({
      model:"gemini-2.5-flash",
      contents:`Explain the given code in short and precise manner:${code}`
    }); 
    setExpCode(response.text);
    setCodeStatus(true);
    alert("Explanation of code is generated");
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
          <Route path='/components/ImgCapGen' element={<ImgCapGen genCaption={genCaption} caption={caption} setURL={setURL}/>}/>
          <Route path='/components/CodeExplainer' element={<CodeExplainer codeStatus={codeStatus} setCodeStatus={setCodeStatus} setCode={setCode} codeExplain={codeExplain} expCode={expCode} setExpCode={setExpCode}/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App