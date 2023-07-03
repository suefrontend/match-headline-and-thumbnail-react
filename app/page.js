"use client";

import Image from "next/image";
import Headline from "@components/Headline";
import ThumbnailList from "@components/ThumbnailList";

function Home() {
  return (
    <main className="">
      <Headline />
      <ThumbnailList />
    </main>
  );
}

export default Home;
