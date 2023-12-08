import React, { useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { VideoScroll } from "react-video-scroll";

// gsap.registerPlugin(ScrollTrigger);

const Videogsap = ({ videoSrc }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
    
//     /* Make sure the video is 'activated' on iOS */
//     const once = (el, event, fn, opts) => {
//       var onceFn = function (e) {
//         el.removeEventListener(event, onceFn);
//         fn.apply(this, arguments);
//       };
//       el.addEventListener(event, onceFn, opts);
//       return onceFn;
//     };

//     once(document.documentElement, "touchstart", function (e) {
//       video.play();
//       video.pause();
//     });

//     /* ---------------------------------- */
//     /* Scroll Control! */

//     let tl = gsap.timeline({
//       defaults: { duration: 5 },
//       scrollTrigger: {
//         trigger: "#video_id", // Replace with your actual container ID or selector
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1, 
//         markers : true,
//         pin: true,
//       },
//     });

//     once(video, "loadedmetadata", () => {
//       tl.fromTo(
//         video,
//         {
//           currentTime: 0,
//         },
//         {
//           currentTime: video.duration || 1,
//         }
//       );
//     });

//     /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
//     setTimeout(function () {
//       if (window["fetch"]) {
//         fetch(videoSrc)
//           .then((response) => response.blob())
//           .then((response) => {
//             var blobURL = URL.createObjectURL(response);

//             var t = video.currentTime;
//             once(document.documentElement, "touchstart", function (e) {
//               video.play();
//               video.pause();
//             });

//             video.setAttribute("src", blobURL);
//             video.currentTime = t + 0.01;
//           });
//       }
//     }, 1000);

//     /* ---------------------------------- */
//   }, [videoSrc]); 


    const setFrame = (props) => {
        const { duration, playbackRate } = props;
        return window.pageYOffset / 20 - playbackRate;
    };

  return (    
    <div className="">
        <VideoScroll
          playbackRate={100} // Adjust the playbackRate value
          setCurrentFrame={setFrame}
          horizontalScroll={true}
          style={{ position: "sticky", top: "0" }}
        >
            <video tabIndex={0} className="video-background" id="video_id" preload="auto" playsInline>
                <source
                type="video/mp4"
                src={videoSrc}
                />
            </video>
        </VideoScroll>
    </div>
  );
};

export default Videogsap;
