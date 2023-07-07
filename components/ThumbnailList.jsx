"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal, indexOfThumbnail, answerIndex } = props;
  console.log("indexOfThumbnail", indexOfThumbnail);

  const renderedList = indexOfThumbnail.map((index) => {
    return (
      <ThumbnailItem
        key={index}
        index={index}
        image={items[index].description}
        answerIndex={answerIndex}
        thumbnailIndex={index}
        openModal={openModal}
      />
    );
  });

  return (
    <div className="thumbnail lg:w-3/4 p-5">
      <ul className="thumbnail__list flex flex-wrap">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
