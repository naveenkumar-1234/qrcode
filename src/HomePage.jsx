import React, { useState } from 'react'

const HomePage = () => {
    const [qr,setQr]=useState("")
    const [size,setSize]=useState("")
    const [img,setImg]=useState("")
    const [url,setUrl]=useState("")

    const generateQr=()=>{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qr)}`
        console.log(url)
         setUrl(url)
         setImg(url)
    }
    const downloadQr=()=>{
        fetch(img)
        .then((Response)=>Response.blob())
        .then((blob)=>{
             const tag=document.createElement("a")
             tag.href=URL.createObjectURL(blob)
            tag.download="qr.png"
            document.body.appendChild(tag)
            tag.click()
            document.body.removeChild(tag)
    }
        
        )
        .catch((error)=>console.error(error))
    }
  return (
    <>
    <div className='wrapper'>
        <h1>Qr code generator</h1>
        {img && <img src=
        {img} className='img' alt="" />}
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

