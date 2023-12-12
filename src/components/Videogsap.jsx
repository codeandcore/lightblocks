import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Videogsap({ videoSrc }) {
  const pinnedElementRef = useRef(null);

  useEffect(() => {
    let videoScroll = document.querySelector(".video-scroll"),
      frameNumber = 0,
      src = videoScroll.currentSrc || videoScroll.src;

    const videoScrollTL = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".video-container",
        pin: true,
        start: "top top",
        end: "+=120%",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          frameNumber = (self.progress / 14) * 100 - 1; //this takes fine tuning divide your videos FPS by two. My video's FPS was 30, 14 was the sweet spot. -1 fixes an issue on safari where the video disappears at the end of the scrollTrigger
          videoScroll.currentTime = frameNumber;
        },
      },
    });

    videoScrollTL.to('.banner_content', { y: '0' })
      .set(pinnedElementRef.current, { position: 'fixed', width: '100%' })
      .to(pinnedElementRef.current, { opacity: 0 }, '+=8') // adjust timing as needed
      .set(pinnedElementRef.current, { position: 'static', opacity: 1 });

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
      videoScroll.play();
      videoScroll.pause();
    });

    //make sure video has loaded
    once(videoScroll, "loadedmetadata", function () {
      videoScrollTL.fromTo(
        videoScroll,
        { currentTime: 0 },
        { currentTime: videoScroll.duration - 1 }
      );
    });

    //When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability?
    setTimeout(function () {
      if (window["fetch"]) {
        fetch(src)
          .then(function (response) {
            return response.blob();
          })
          .then(function (response) {
            var blobURL = URL.createObjectURL(response);
            var t = videoScroll.currentTime;
            once(document.documentElement, "touchstart", function (e) {
              videoScroll.setAttribute("src", blobURL);
              videoScroll.currentTime = t + 0.01;
            });
          });
      }
    }, 0);

    // Clean up on component unmount
    return () => {
      if (videoScrollTL) {
        videoScrollTL.kill();
      }
    };
  }, [videoSrc]); // Include videoSrc in the dependency array

  return (
    <>
     <div className="wrapper">
        <div className="banner_content" ref={pinnedElementRef}>
          <h2>Decentralized oraclesecured by restaked ETH.Connecting blockchainwith real world data.</h2>
          <div className="wrap_button">
            <button className="btn become_btn">Become a Validator</button>
            <button className="btn see_data_btn">See Data</button>
          </div>
        </div>
      </div>
      <div className="video-container">
        <video muted className="video-scroll" src={videoSrc}></video>
      </div>
    </>
  );
}
