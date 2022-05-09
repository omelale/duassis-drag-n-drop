import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import data from './constants/data';
import Team from './components/Team'

function App() {
    const [players, updatePlayers] = useState(data.players);
    const teamNumber = data.teams;
    const playerIds = players.map((player) => player.id);
    const teams = [];
    for (let i = 0; i <= teamNumber; i++) {
        if(i == 0){
            teams[`team-${i}`] = {
                'id': `team-${i}`,
                'name': `Available players`,
                'playerIds': playerIds
            }
        } else {
            teams[`team-${i}`] = {
                'id': `team-${i}`,
                'name': `Team-${i + 1}`,
                'playerIds': [],
            }
        }
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(players);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updatePlayers(items);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Drag and drop the player into the team you wish</h1>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <h3>Available players</h3>
                    <Team players={players}/>
                </DragDropContext>
            </header>
        </div>
    );
}

export default App;