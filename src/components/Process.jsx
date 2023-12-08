import React from "react";
import InfoPlatform from "./InfoPlatform";

const Process = ({ videoSrcprocess }) => {
  return (
    <div className="platform_list process_list section_gap">
      <div className="wrapper d-flex flex-wrap justify-space-between">
        <div className="left_text">
          <h6>THE PROCESS</h6>
          <InfoPlatform
            subtitle="Full transparency through Blockchain immutability"
            description="Cryptographic verifiable and immutable on-chain data feeds ensure a variety of use cases in a modular way."
          />
        </div>
        <div className="right_video">
            <video
            loop
            autoPlay
            muted
            className="platform_video"
            tabIndex="0"
            autobuffer="autobuffer"
            preload="preload"
            >
            <source src={videoSrcprocess} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </div>
  );
};

export default Process;
