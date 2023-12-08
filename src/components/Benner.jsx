import React, { useRef, useEffect } from "react";
import Videogsap from "./Videogsap";
import videoSource from '../assets/video/video-sample.mp4'

const Banner = () => {
  
  return (
    <div>
      {/* Other components */}
      <Videogsap videoSrc={videoSource} />
      {/* Other components */}
    </div>
  );
};

export default Banner;
