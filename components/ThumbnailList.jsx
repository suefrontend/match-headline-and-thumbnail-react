"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal, indexOfThumbnail } = props;

  const renderedList = indexOfThumbnail.map((index) => {
    return (
      <ThumbnailItem image={items[index].description} openModal={openModal} />
    );
  });

  return (
    <div className="thumbnail lg:w-3/4 p-5">
      <ul className="thumbnail__list flex flex-wrap">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
