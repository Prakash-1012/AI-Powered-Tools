import React, { useRef, useState } from 'react'
import CapHeader from './CapHeader'
import { CiImageOn } from "react-icons/ci";
import { PiStarFour } from "react-icons/pi";
import { SlCloudUpload } from "react-icons/sl";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from 'axios';

const ImgCapGen = ({genCaption, caption,setURL}) => {

  const imgRef = useRef();
  const dropArea = useRef();
  const inputImg = useRef();
  const [showBG, setShowBG] = useState(true);
  const [file, setFile] = useState();
  const [showCaption,setShowCaption]=useState(false);
  

  const CLOUD_NAME="dehpotcut";
  const UPLOAD_PRESET = "Image-Upload";

  const handleDrop = (e) => {
    e.preventDefault();
    if (!e.dataTransfer?.files?.length) return;
    const file = e.dataTransfer.files[0];
    inputImg.current.files = e.dataTransfer.files;
    imgRef.current.src = URL.createObjectURL(file);
    setFile(file);
    setShowBG(false);
  }


  const handleCloud = async () => {
    console.log("func called");
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData
      );
      const url = response.data.secure_url;
      console.log('Image uploaded successfully:', url);
      setURL(url);

    } catch (error) {
      console.error('Upload Error:', error);
      alert('Upload failed. Check console for details.');
    } 
      genCaption()
    }
  


const handleUpload = (e) => {
  imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  setFile(e.target.files[0]);
  setShowBG(false);
}
return (
  <>
    <CapHeader />
    <div className='lg:p-10 box-border lg:flex gap-10'>
      <div className='lg:w-120 lg:p-7 lg:h-screen border border-gray-900 rounded-2xl bg-gray-950/50'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <CiImageOn className='text-cyan-400 text-3xl' />
            <p className='text-white font-semibold ml-2'>Upload Image</p>
          </div>
        </div>
        <div className='lg:w-100 border-dashed border-2 border-gray-700 rounded-2xl p-5 bg-gray-800/50 text-white lg:h-auto flex flex-col mt-10 items-center'>
          <label htmlFor="Image" ref={dropArea} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} className={`${!showBG ? "hidden" : ""}`}>
            <div className='flex items-center '>
              <div className={`${"flex justify-center items-center flex-col lg:w-90"}`}>
                <div className='bg-gray-700/50 w-20 h-20 rounded-full flex mb-3 justify-center items-center'>
                  <SlCloudUpload className='text-6xl rounded-full text-violet-300' />
                </div>
                <p className='text-gray-200 mb-3 text-lg'>Drag and drop your image here</p>
                <p className='text-gray-500 text-sm'>or</p>
                <div className='text-gray-200 w-30 h-10 bg-linear-to-r rounded-lg mt-2 flex justify-center items-center from-purple-600 to-blue-900 via-indigo-500'>Browse Files</div>
                <input ref={inputImg} onChange={handleUpload} type="file" id="Image" accept='image/jpeg,image/png,image/jpg' />
              </div>
            </div>
          </label>
          <img className='border-gray-500 border rounded-md' ref={imgRef} alt="" />
           <label className={`${!showBG?"lg:w-90 lg:h-10 items-center mt-2 rounded-lg flex justify-center hover:opacity-80 bg-linear-to-r from-purple-600 to-blue-900 via-indigo-500 animate-gradient":"hidden"}`} htmlFor="Image">
            <MdOutlineFileUpload className='text-gray-200 text-xl'/>
            <span className='text-gray-200 ml-2'>Change Image</span>
            </label>
        </div>

        <div className='flex items-center'>
          <button onClick={handleCloud} className='lg:w-100 lg:h-10 text-white bg-linear-to-r from-purple-600 lg:mt-10 to-blue-900 via-indigo-500 flex justify-center items-center cursor-pointer hover:opacity-80 rounded-xl animate-gradient'>
            <PiStarFour className='text-white text-2xl font-semibold' />
            <p className='font-semibold ml-2'>Generate Caption</p>
          </button>
         
        </div>
      </div>

      <div className='lg:w-120 lg:p-7 lg:h-screen border border-gray-900 rounded-2xl bg-gray-950/50'>
        <div className='flex'>
          <PiStarFour className='text-purple-500 text-2xl font-semibold' />
          <p className='font-semibold ml-2 text-white'>Generated Caption</p>
        </div>
        <div className={`${"lg:w-100 border border-gray-700 flex justify-center items-center text-white rounded-2xl p-5 bg-gray-800/50 lg:h-120 mt-10"}`}>
          <div className='flex items-center'>
            <div className={`${"flex justify-center items-center flex-wrap lg:w-90"}`}>
              <div className='bg-gray-700/50 w-15 h-15 rounded-full flex mb-3 justify-center items-center'>
                <PiStarFour className='text-4xl rounded-full text-violet-300' />
              </div>
              <p className='text-gray-500 mb-3 text-lg'>Your AI-generated caption will appear here</p>
              <p className='text-gray-600 text-sm'>Upload an image and click "Generate Caption"</p>
            </div>
          </div>

          <div className={`${"flex justify-center items-center flex-wrap lg:w-90"}`}>
            <div className='w-15 h-15 rounded-full border-b-5 border-violet-500 flex mb-3 justify-center items-center animate-spin'>
              <PiStarFour className='counter-spin text-3xl rounded-full text-purple-500' />
            </div>
            <p className='text-gray-500 text-lg'>Analyzing image and generating caption...</p>
          </div>

          <div className={`${showCaption?"border-b box-border lg:w-110 lg:h-auto bg-violet-950/50 border-gray-500 rounded-lg p-5":"hidden"}`}>
            {caption}
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default ImgCapGen