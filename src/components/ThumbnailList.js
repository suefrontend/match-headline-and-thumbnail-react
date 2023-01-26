import Thumbnail from './Thumbnail';
import classes from './thumbnail.module.css';

const ThumbnailList = (props) => {
	const { articles } = props;

	return (
		<div className={classes.thumbnail}>
			<Thumbnail articles={articles} />
		</div>
	);
};

export default ThumbnailList;
