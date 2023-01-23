import Thumbnail from './Thumbnail';
import classes from './thumbnail.module.css';

const ThumbnailList = (props) => {
	return (
		<div className={classes.thumbnail}>
			<Thumbnail />
		</div>
	);
};

export default ThumbnailList;
