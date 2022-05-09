import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import data from './constants/data';
import Team from './components/Team'

function App() {
    const [players, updatePlayers] = useState(data.players);
    const [teams, setTeams] = useState(data.sq);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])
    const teamNumber = data.teams;
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
                <div className='container teamContainer' >
                    <DragDropContext onDragEnd={handleOnDragEnd} >
                        {
                            teams.map(team => {
                                const teamPlayers = team.playerIds.map(playerId => players.find(p => p.id === playerId));
                                return <Team key={team.id} players={teamPlayers} id={team.id} name={team.name} width={windowDimension.width}/>
                            })
                        }
                    </DragDropContext>
                </div>
            </header>
        </div>
    );
}

export default App;