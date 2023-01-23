const Headline = (props) => {
	return (
		<div>
			{props.articles.map((article) => (
				<p>{article.title}</p>
			))}
		</div>
	);
};

export default Headline;
