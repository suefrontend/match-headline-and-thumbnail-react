import ThumbnailItem from "@components/ThumbnailItem";

function ThumbnailList(props) {
  const { items, openModal, indexOfThumbnail, answerIndex, resetQuiz } = props;

  const renderedList = indexOfThumbnail.map((index) => {
    return (
      <ThumbnailItem
        key={index}
        index={index}
        image={items[index]?.description}
        answerIndex={answerIndex}
        thumbnailIndex={index}
        openModal={openModal}
        resetQuiz={resetQuiz}
      />
    );
  });

  return (
    <div className="thumbnail p-4 w-full">
      <ul className="grid sm:grid-cols-2 gap-4">{renderedList}</ul>
    </div>
  );
}

export default ThumbnailList;
