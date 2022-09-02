import Headline from './components/Headline';
import './App.css';
import ThumbnailList from './components/ThumbnailList';

function App() {
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
