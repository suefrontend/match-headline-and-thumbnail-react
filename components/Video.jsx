"use client";
import { useEffect, useRef } from "react";

function Video(props) {
  const videoRef = useRef();

  console.log("props", props);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  return (
    <div className="video-wrapper relative">
      <video
        ref={videoRef}
        src="images/background.mp4"
        width="250"
        loop
        muted
        className="object-cover h-screen w-full"
      ></video>
    </div>
  );
}

export default Video;
