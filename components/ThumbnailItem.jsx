"use client";
import Image from "next/image";

function ThumbnailItem(props) {
  const { openModal } = props;

  // Create div element so to access to HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = props.image;

  const imgTag = tempElement.getElementsByTagName("img")[0];

  const src = imgTag.getAttribute("src");
  const alt = imgTag.getAttribute("alt");
  const width = imgTag.getAttribute("width");
  const height = imgTag.getAttribute("height");

  const handleShowClick = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <>
      <li onClick={handleShowClick} className="w-1/2 max-lg:w-full">
        <figure className="thumbnail__item__img w-full">
          <Image src={src} alt={alt} width={width} height={height} className="w-full" />
        </figure>
        <span className="thumbnail__item__text text-white text-sm">Incorrect!</span>
      </li>
    </>
  );
}

export default ThumbnailItem;
