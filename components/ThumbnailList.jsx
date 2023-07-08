"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal, indexOfThumbnail, answerIndex, resetQuiz } = props;
  console.log("answerIndex", answerIndex);
  console.log("indexOfThumbnail", indexOfThumbnail);

  const shuffledIndexOfThumbnail = _.shuffle(indexOfThumbnail);

  const renderedList = shuffledIndexOfThumbnail.map((index) => {
    return (
      <ThumbnailItem
        key={index}
        index={index}
        image={items[index].description}
        answerIndex={answerIndex}
        thumbnailIndex={index}
        openModal={openModal}
        resetQuiz={resetQuiz}
      />
    );
  });

  return (
    <div className="thumbnail p-5">
      <ul className="flex flex-wrap gap-5">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
