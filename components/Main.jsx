"use client";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import Headline from "@components/Headline";
import ThumbnailList from "@components/ThumbnailList";
import Modal from "@components/Modal";

function Main(props) {
  const { items } = props;
  console.log("items", items);

  const [answerIndex, setAnswerIndex] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getThreeThumbnails = (data, answerIndex) => {
    // 1. Create an array of thumbnails
    const indexOfThumbnails = [answerIndex];
    // 2. If thumbnails[] has 4 index, return. No need to add anymore
    while (indexOfThumbnails.length < 4) {
      // 3. Randomly generate index
      const randomlyGeneratedIndex = Math.round(Math.random() * data.length);
      // 4. Condition for avoid putting duplicate index
      if (
        randomlyGeneratedIndex !== answerIndex &&
        !indexOfThumbnails.includes(randomlyGeneratedIndex)
      ) {
        indexOfThumbnails.push(randomlyGeneratedIndex);
      }
    }
    setThumbnails(_.shuffle(indexOfThumbnails));
  };

  useEffect(() => {
    const lengthOfNews = items.length - 1;
    const index = Math.round(Math.random() * lengthOfNews);
    setAnswerIndex(index);

    getThreeThumbnails(items, index);
  }, [answerIndex]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const resetQuiz = () => {
    setAnswerIndex(null);
  };

  console.log("answerIndex", answerIndex);

  return (
    <>
      {/* wrapper - body */}
      <div className="wrapper p-4">
        {/* content - background */}
        <div className="content max-md:w-[90vw] md:w-[96vw] lg:w-[80vw]">
          {answerIndex && thumbnails && (
            <>
              <Headline item={items[answerIndex]} />
              <ThumbnailList
                indexOfThumbnail={thumbnails}
                items={items}
                answerIndex={answerIndex}
                openModal={openModal}
                resetQuiz={resetQuiz}
              />
            </>
          )}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          item={items[answerIndex]}
        />
      )}
    </>
  );
}

export default Main;
