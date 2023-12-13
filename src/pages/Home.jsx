import React, { useEffect, useState } from "react";
import Banner from "../components/Benner";
import videoSrcplatform from "../assets/video/AssetA.mp4";
import videoSrcprocess from "../assets/video/AssetB.mp4";
import imagesSrc from "../assets/images/sec2.png";
import Platform from "../components/Platfrom";
import Promice from "../components/Promice";
import Process from "../components/Process";
import Icon from '../assets/images/icon.png'

const Loader = () => (
  <div className="loader-container">
    <div className="loader"><img src={Icon} alt="Icon" /></div>
  </div>
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main">
          <Banner />
          <Platform videoSrcplatform={videoSrcplatform} />
          <div className="line_hr"></div>
          <Promice imagesSrc={imagesSrc} />
          <div className="line_hr"></div>
          <Process videoSrcprocess={videoSrcprocess} />
        </div>
      )}
    </>
  );
};

export default Home;
