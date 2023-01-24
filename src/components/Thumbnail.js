import classes from './thumbnail.module.css';

const Thumbnail = (props) => {
	const images = props.articles.map((article) => article.description);

	return (
		<ul className={classes.thumbnail__list}>
			<li dangerouslySetInnerHTML={{ __html: images }} />
		</ul>
	);
};

export default Thumbnail;
