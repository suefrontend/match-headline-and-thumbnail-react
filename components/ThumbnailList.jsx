"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal, thumbnails } = props;
  console.log("thumbnails ThumbnailList", thumbnails);

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
