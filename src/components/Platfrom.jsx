import React from "react";
import InfoPlatform from "./InfoPlatform";

const Platform = ({ videoSrcplatform }) => {
  return (
    <div className="platform_list section_gap">
      <div className="wrapper d-flex flex-wrap justify-space-between">
        <div className="left_text">
          <h6>THE PLATFORM</h6>
          <InfoPlatform
            subtitle="Provides Real-Time Market Data Anytime, Anywhere"
            description="ESO delivers real-time market data for crypto, equities, FX, and commodities using nothing but Ethereum validators and secured by staked ETH."
            readmore_text="Read more"
          />
          <InfoPlatform
            subtitle="Instant updates. Ethereum staking security."
            description="ESO data streams unlocks a new generation of derivatives products powered by decentralized and transparent infrastructure."
            readmore_text="Read more"
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
            <source src={videoSrcplatform} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </div>
  );
};

export default Platform;
