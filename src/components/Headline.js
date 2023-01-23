const Headline = (props) => {
	return (
		<div className='headline'>
			<div className='headline__content'>
				<p className='headline__text text-lower-opacity'>
					[ Choose thumbnail best matches the headline ]
				</p>
				{props.articles.map((article) => (
					<h2 className='headline__heading'>{article.title}</h2>
				))}
			</div>
		</div>
	);
};

export default Headline;
