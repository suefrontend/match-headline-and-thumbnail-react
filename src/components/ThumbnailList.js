import Thumbnail from './Thumbnail';
import classes from './thumbnail.module.css';

const ThumbnailList = (props) => {
	console.log('answerIndex ThumbnailList: ', props.answerIndex);
	const { articles } = props;

	return (
		<div className={classes.thumbnail}>
			<Thumbnail articles={articles} />
		</div>
	);
};

export default ThumbnailList;
