"use client";

import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items } = props;
  // console.log("items", items);

  const renderedList = items.map((item) => {
    return <ThumbnailItem image={item.description} />;
  });

  return (
    <div className="thumbnail">
      <ul class="thumbnail__list">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
