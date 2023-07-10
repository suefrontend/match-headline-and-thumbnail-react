import getNewsData from "@lib/getNewsData";
import Video from "@components/Video";
import Main from "@components/Main";

async function Home() {
  const res = getNewsData();
  const data = await res;
  const news = data.items;

  return (
    <>
      <Video />
      <Main items={news} />
    </>
  );
}

export default Home;
