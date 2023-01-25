import Thumbnail from './Thumbnail';
import classes from './thumbnail.module.css';

const ThumbnailList = (props) => {
	return (
		<div className={classes.thumbnail}>
			<Thumbnail articles={props.articles} />
		</div>
	);
};

export default ThumbnailList;
