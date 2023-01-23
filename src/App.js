import { useState, useEffect } from 'react';
import Headline from './components/Headline';
import './App.css';
import ThumbnailList from './components/ThumbnailList';

function App() {
	const [articles, setArticles] = useState([]);
	const [headline, setHeadline] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const data = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.cbc.ca%2Flineup%2Ftopstories.xml'
			);
			const response = await data.json();
			setArticles(response.items);
			setHeadline(response.items.title);
		};
		fetchArticles();
	}, []);

	// console.log('articles', articles);
	// console.log('headline', headline);

	const test = articles.map((article) => article.title);
	// console.log('test', test);

	return (
		<div className='App'>
			<div>
				<Headline articles={articles} />
			</div>
			<div>
				<ThumbnailList />
			</div>
		</div>
	);
}

export default App;
