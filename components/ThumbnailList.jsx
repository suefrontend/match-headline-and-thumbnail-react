"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal, answerIndex } = props;
  console.log("answerIndex ThumbnailList", answerIndex);

  const renderedList = items.map((item) => {
    return <ThumbnailItem image={item.description} openModal={openModal} />;
  });

  return (
    <div className="thumbnail lg:w-3/4 p-5">
      <ul className="thumbnail__list flex flex-wrap">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
