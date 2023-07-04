"use client";
import Image from "next/image";

function ThumbnailItem(props) {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = props.image;

  const imgTag = tempElement.getElementsByTagName("img")[0];

  const src = imgTag.getAttribute("src");
  const alt = imgTag.getAttribute("alt");
  const width = imgTag.getAttribute("width");
  const title = imgTag.getAttribute("title");
  const height = imgTag.getAttribute("height");

  const pTag = tempElement.getElementsByTagName("p")[0];
  const pContent = pTag.innerHTML.trim();

  return (
    <>
      <li>
        <figure className="thumbnail__item__img">
          <Image src={src} alt={alt} width={width} height={height} />
        </figure>
        <span className="thumbnail__item__text"></span>
      </li>
      {/* <p>p content: {pContent}</p> */}
    </>
  );
}

export default ThumbnailItem;
