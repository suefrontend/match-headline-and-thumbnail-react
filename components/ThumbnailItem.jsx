"use client";
import Image from "next/image";
import { useState } from "react";
import _ from "lodash";

function ThumbnailItem(props) {
  const { openModal, answerIndex, index, resetQuiz, image } = props;
  const [result, setResult] = useState(null);
  const [showButtons, setShowButton] = useState(false);

  // Create div element so to access to HTML tags
  const tempElement = document.createElement("div");
  tempElement.innerHTML = image;

  const imgTag = tempElement.getElementsByTagName("img")[0];

  const src = imgTag ? imgTag.getAttribute("src") : "";
  const alt = imgTag ? imgTag.getAttribute("alt") : "";

  const handleShowClick = (e) => {
    e.preventDefault();

    // Open modal only when correct thumbnail is clicked
    const dataIndex = e.currentTarget.getAttribute("data-index");
    const parsedDataIndex = parseInt(dataIndex);

    if (parsedDataIndex === answerIndex) {
      setResult("Correct!");
      setShowButton(true);
    } else {
      setResult("Incorrect");
    }
  };

  const handleOpenClick = () => {
    openModal();
  };

  const handleResetQuiz = () => {
    resetQuiz();
  };

  return (
    <>
      <li
        onClick={handleShowClick}
        className={`thumbnail__item relative cursor-pointer`}
        data-index={index}
      >
        <figure className="thumbnail__item__img relative lg:h-[14rem] max-lg:h-[14rem] max-md:h-[14rem] max-sm:h-[10rem]">
          <Image src={src} alt={alt} fill className="object-cover" />
        </figure>
        {result && (
          <div className="thumbnail-overlay text-white text-sm absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className={`mb-3 ${showButtons && "text-xl"}`}>{result}</span>
            {showButtons && (
              <div className="flex flex-col gap-6">
                <button
                  onClick={handleOpenClick}
                  className="bg-red text-white py-2 px-5 flex-1 cursor-pointer"
                >
                  More Detail
                </button>
                <span
                  onClick={handleResetQuiz}
                  className="text-gray-400 text-center underline text-xs flex-1"
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
