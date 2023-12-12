import React from 'react'
import Banner from '../components/Benner'
import videoSrcplatform from '../assets/video/AssetA.mp4'
import videoSrcprocess from '../assets/video/AssetB.mp4'
import imagesSrc from '../assets/images/sec2.png'
import Platform from '../components/Platfrom'
import Promice from '../components/Promice'
import Process from '../components/Process'

const Home = () => {
  return (
    <div className='main'>
        <Banner />
        <Platform videoSrcplatform={videoSrcplatform}/>
        <div className="line_hr"></div>
        <Promice imagesSrc={imagesSrc}/>
        <div className="line_hr"></div>
        <Process videoSrcprocess={videoSrcprocess}/>
    </div>  
  )
}

export default Home;