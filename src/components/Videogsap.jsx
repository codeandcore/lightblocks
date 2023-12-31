import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../assets/images/Eoracle.svg'

gsap.registerPlugin(ScrollTrigger);

export default function Videogsap({ videoSrc }) {
  const htmlRef = useRef(document.documentElement);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const pinnedElementRef = useRef(null);
  const pinnedElementReflogo = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const frameCount = 85;

    const currentFrame = (index) =>
      `https://frontendeveloper.org/ourwork/video-test/images/ezgif-frame-00${index
        .toString()
        .padStart(2, "0")}.jpg`;
      // `../assets/frames/ezgif-frame-00${index.toString().padStart(2, "0")}.jpg`;
      // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const videoScrollTL = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: ".video-container",
          pin: true,
          start: "top center",
          end: "+=300%",
          scrub: true,
          pinSpacing: false,
        // markers: true,
        }
    });

    videoScrollTL.to('.banner_content', {opacity: 0, ease: 'power2.inOut'})
    .to(pinnedElementRef.current, { opacity: 1, y:'-100'}, '+=5') 
    .set(pinnedElementRef.current, { position: 'fixed',y:'0', width: '100%', ease: 'power2.inOut'}, '<')
    .to(pinnedElementRef.current, { opacity: 0 }, '+=5') // adjust timing as needed
    .set(pinnedElementRef.current, { position: 'static', opacity: 1 })
    .set(pinnedElementReflogo.current, { position: 'fixed'})
    .to(pinnedElementReflogo.current, { opacity: 0 }, '>') // adjust timing as needed
    .set(pinnedElementReflogo.current, { position: 'static', opacity: 1 });


    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 1920;
    canvas.height = 1080;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const scrollTop = htmlRef.current.scrollTop;
      const maxScrollTop = htmlRef.current.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener("scroll", handleScroll);

    preloadImages();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top_banner">
      <a href="/" className="logo" ref={pinnedElementReflogo}>
        <img src={logo} alt="" />
      </a>
      <div className="wrapper">
        <div className="banner_content" ref={pinnedElementRef}>
          <h2>
            Decentralized oraclesecured by restaked ETH.Connecting
            blockchainwith real world data.
          </h2>
          <div className="wrap_button">
            <button className="btn become_btn">Become a Validator</button>
            <button className="btn see_data_btn">See Data</button>
          </div>
        </div>
      </div>
      <div className="video-container">
        <canvas ref={canvasRef} id="hero-lightpass" />
      </div>
    </div>
  );
}
