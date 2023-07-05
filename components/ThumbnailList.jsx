"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal } = props;

  const renderedList = items.map((item) => {
    return <ThumbnailItem image={item.description} openModal={openModal} />;
  });

  return (
    <div className="thumbnail">
      <ul className="thumbnail__list flex flex-wrap">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
