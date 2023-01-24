import Thumbnail from './Thumbnail';
import classes from './thumbnail.module.css';

const ThumbnailList = (props) => {
	return (
		<div className={classes.thumbnail}>
			<Thumbnail articles={props.articles} />
			{/* {props.articles.map((article) => (
				<p>{article.description}</p>
			))} */}
		</div>
	);
};

export default ThumbnailList;
