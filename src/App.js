import { useState, useEffect } from 'react';
import Headline from './components/Headline';
import classes from './App.module.css';
import ThumbnailList from './components/ThumbnailList';
import Background from './components/Background';

function App() {
	const [articles, setArticles] = useState([]);
	// const [answerIndex, setAnswerIndex] = useState(null);
	let answerIndex = Math.floor(Math.random() * 10);

	useEffect(() => {
		const fetchArticles = async () => {
			const data = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.cbc.ca%2Flineup%2Ftopstories.xml'
			);
			const response = await data.json();

			console.log('answerIndex', answerIndex);

			setArticles(response.items);
		};
		fetchArticles();
	}, []);

	return (
		<>
			<Background />
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<div className={classes.content}>
						<Headline articles={articles} answerIndex={answerIndex} />
						<ThumbnailList articles={articles} answerIndex={answerIndex} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
