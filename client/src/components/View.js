import React from 'react'
import temp from '../components/assets/temp3.png';
import "./Style.css";

export default function View() {
  return (
    <div><div class=" container1 bg-dark">
    <div className="image-wrapper">
            <img src={temp} className="image" />
            {/* <h1 className="fname">{fname}</h1> */}
            {/* <h6 className="idate">{idate}</h6> */}
          </div>
        
  </div></div>
  )
}
