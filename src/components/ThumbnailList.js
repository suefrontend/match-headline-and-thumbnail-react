import Thumbnail from './Thumbnail';
import classes from './thumbnail.module.css';

const ThumbnailList = (props) => {
	const images = props.articles.map((article) => article.description);
	// console.log('props.articles: ', props.articles);
	// console.log('images: ', images);
	// const detailImg = images.match(/<img[^>]+>/gi);
	// const detailTxt = images.match(/<p>(.*?)<\/p>/g);

	// console.log('detailImg', detailImg);
	// console.log('');

	return (
		<div className={classes.thumbnail}>
			<Thumbnail />
			{images.map((image) => (
				<p>{image}</p>
			))}
		</div>
	);
};

export default ThumbnailList;
