"use client";

function Headline(props) {
  const { item } = props;

  return (
    <div className="headline">
      <div className="headline__content">
        <p className="headline__text text-lower-opacity">
          [ Choose thumbnail best matches the headline ]
        </p>
        <h2 className="headline__heading">{item.title}</h2>
      </div>
    </div>
  );
}

export default Headline;
