import classes from '../App.module.css';

const Headline = (props) => {
	return (
		<div className={classes.headline}>
			<div className={classes.headline__content}>
				<p className='headline__text text-lower-opacity'>
					[ Choose thumbnail best matches the headline ]
				</p>
				{props.articles.map((article) => (
					<h2 className={classes.headline__heading}>{article.title}</h2>
				))}
			</div>
		</div>
	);
};

export default Headline;
