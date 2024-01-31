import React, { useState } from 'react'
import ReactLoading from 'react-loading';
const HomePage = ({type,color}) => {

    //useState 
    const [qr,setQr]=useState("")
    const [size,setSize]=useState("")
    const [img,setImg]=useState("")
    const [url,setUrl]=useState("")


    //Generating Qr code image
    const generateQr=()=>{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qr)}`
        console.log(url)
        //setting url and image using useState
         setUrl(url)
         setImg(url)
    }

    //Download QR_code image
    const downloadQr=()=>{
        fetch(url)
        //Getting BLOB(Binary Large Object) from response 
        .then(Response=>Response.blob())
        .then((blob)=>{
        //creation of Anchor Tag
           const createATag=document.createElement("a")
           //convertion of img from BLOB
           createATag.href=URL.createObjectURL(blob)
           //Substituting appropiate name for image
           createATag.download="QR.png"
           //appending and removing of the Anchor tag
           document.body.appendChild(createATag)
           createATag.click()
           document.body.removeChild(createATag)
        })
    }
  return (
    <>
    <div className='wrapper'>
        <h1>Qr code generator</h1>

        {/* conditionally rendering image */}
        {img && <img src={img} className='img' alt="" />}

        <div className='input-box'>
            <input type="text"  placeholder='Enter the text to encode' value={qr}
            onChange={(e)=>setQr(e.target.value)}
            />
            <input type="text"  placeholder='Enter the size of the img' value={size}
            onChange={(e)=>setSize(e.target.value)}
            />
        </div>
        <div className='buttons'>
            <button onClick={generateQr} >Generate QR</button>
            <button onClick={downloadQr}>Download QR</button>
        </div>

    </div>
    
    </>
  )
}

export default HomePage

