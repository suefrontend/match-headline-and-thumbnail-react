"use client";

function Headline(props) {
  const { item } = props;

  return (
    <div className="headline lg:text-right lg:w-1/4 lg:h-auto flex items-center p-5">
      <div className="headline__content">
        <p className="headline__text text-lower-opacity mb-4 text-pink">
          [ Choose thumbnail best matches the headline ]
        </p>
        <h2 className="headline__heading font-light text-white text-xl xl:text-4xl">
          {item.title}
        </h2>
      </div>
    </div>
  );
}

export default Headline;
