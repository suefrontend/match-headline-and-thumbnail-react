function Headline(props) {
  const { item } = props;

  return (
    <div className="headline p-5">
      <div className="headline__content">
        <p className="headline__text max-sm:text-sm text-lower-opacity mb-4 text-pink">
          [ Choose thumbnail best matches the headline ]
        </p>
        <h2 className="headline__heading font-light text-white max-sm:text-lg max-md:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
          {item.title}
        </h2>
      </div>
    </div>
  );
}

export default Headline;
