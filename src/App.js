import './App.css';
import data from './constants/data';

function App() {
	return (
		<div className="App">
			<ul>
				{data.players.map((player) => {
					
					return <li key={player.id}>{player.name}</li>
				})}
			</ul>
			
		</div>
	);
}

export default App;
