import { useRef } from 'react';
import bg_video from '../images/background.mp4';
import classes from '../App.module.css';

const Background = () => {
	const vidRef = useRef(null);
	const handlePlayVideo = () => {
		vidRef.current.play();
	};

	return (
		<div className={classes.video_wrapper}>
			<video autoplay muted loop className={classes.video} ref={vidRef}>
				<source src={bg_video} type='video/mp4' />
			</video>
		</div>
	);
};

export default Background;
