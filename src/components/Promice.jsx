import React from "react";
import InfoPlatform from "./InfoPlatform";

const Promice = ({ imagesSrc }) => {
  return (
    <div className="platform_list promice_list section_gap reverse_column">
      <div className="wrapper d-flex flex-wrap justify-space-between">
        <div className="right_img">
           <img src={imagesSrc} alt="" />
        </div>
        <div className="left_text">
          <h6>THE PROMISE</h6>
          <InfoPlatform
            subtitle="Every existing oracle create its own set of node operators and users need to trust them without knowing much about them."
            description="ESO harness the power of restaking to build the first Ethereum stakers oracle."
            readmore_text="See our Docs"
          />
        </div>
      </div>
    </div>
  );
};

export default Promice;
