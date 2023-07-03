"use client";

import React, { useRef, useEffect } from "react";
import Headline from "@components/Headline";
import ThumbnailList from "@components/ThumbnailList";

function Home() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  return (
    <>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src="images/background.mp4"
          width="250"
          loop
          muted
          className="video"
        ></video>
      </div>
      <main className="wrapper">
        <div className="content">
          <Headline />
          <ThumbnailList />
        </div>
      </main>
    </>
  );
}

export default Home;
