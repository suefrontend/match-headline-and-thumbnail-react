import classes from './thumbnail.module.css';

const Thumbnail = (props) => {
	const thumbnailList = props.articles.map((article) => article.description);

	const thumbnails = thumbnailList
		.map((thumbnail) => thumbnail.match(/<img[^>]+>/gi))
		.join('');

	return (
		<ul className={classes.thumbnail__list}>
			<li dangerouslySetInnerHTML={{ __html: thumbnails }} />
		</ul>
	);
};

export default Thumbnail;
