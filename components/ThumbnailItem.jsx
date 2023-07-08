"use client";
import Image from "next/image";
import { useState } from "react";

function ThumbnailItem(props) {
  const { openModal, answerIndex, index, resetQuiz } = props;
  const [result, setResult] = useState(null);
  const [showButtons, setShowButton] = useState(false);
  const [disabled, setDisabled] = useState(false);

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

    // Open modal only when correct thumbnail is clicked
    // if(checkAnswer) { openModal }
    const dataIndex = e.currentTarget.getAttribute("data-index");
    const parsedDataIndex = parseInt(dataIndex);

    if (parsedDataIndex === answerIndex) {
      setResult("Correct!");
      console.log("Correct");
      setShowButton(true);
      setDisabled(true);

      // Make other thumbnails unclickable and turn cursor to default
      // return;
      // openModal();
    } else {
      setResult("Incorrect");
      console.log("Incorrect");
    }
  };

  const handleOpenClick = () => {
    console.log("clicked");
    openModal();
  };

  const handleResetQuiz = () => {
    console.log("reset");
    resetQuiz();
  };

  return (
    <>
      <li
        onClick={handleShowClick}
        className={`max-lg:w-full relative cursor-pointer ${
          disabled && "pointer-events-none"
        }`}
        data-index={index}
      >
        <figure className="thumbnail__item__img w-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full"
          />
        </figure>
        {result && (
          <div className="thumbnail-overlay text-white text-sm absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className={`mb-3 ${showButtons && "text-xl"}`}>{result}</span>
            {showButtons && (
              <div className="flex flex-col gap-6">
                <button
                  onClick={handleOpenClick}
                  className="bg-red text-white py-2 px-5 flex-1 cursor-pointer pointer-events-auto"
                >
                  More Detail
                </button>
                <span
                  onClick={handleResetQuiz}
                  className="text-gray-400 text-center underline text-xs flex-1 cursor-pointer pointer-events-auto"
                >
                  Reset
                </span>
              </div>
            )}
          </div>
        )}
      </li>
    </>
  );
}

export default ThumbnailItem;
