import { useState, useEffect } from 'react';
import Headline from './components/Headline';
import './App.css';
import ThumbnailList from './components/ThumbnailList';

function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			const data = await fetch(
				'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.cbc.ca%2Flineup%2Ftopstories.xml'
			);
			const response = await data.json();
			setArticles(response.items);
		};
		fetchArticles();
	}, []);

	return (
		<div className='App'>
			<div>
				<Headline />
			</div>
			<div>
				<ThumbnailList />
			</div>
		</div>
	);
}

export default App;
