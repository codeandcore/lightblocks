import React, { useRef, useEffect } from "react"; 
import Videogsap from "./Videogsap";
import videoSource from '../assets/video/assets_120.mp4'
import logo from '../assets/images/Eoracle.svg'
import InfoPlatform from "./InfoPlatform";

const Banner = () => {
  
  return (
    <div className="head_wrap">
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
     
      <div className="baner_video_wrapper">
        {/* Other components */}
        <Videogsap videoSrc={videoSource} />
        {/* Other components */}
      </div>
    </div>
  );
};

export default Banner; 
