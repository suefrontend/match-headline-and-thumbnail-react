import classes from '../App.module.css';

const Headline = (props) => {
	const { articles, answerHeadline } = props;

	return (
		<div className={classes.headline}>
			<div className={classes.headline__content}>
				<p className='headline__text text-lower-opacity'>
					[ Choose thumbnail best matches the headline ]
				</p>

				<h2 className={classes.headline__heading}>{answerHeadline}</h2>
			</div>
		</div>
	);
};

export default Headline;
