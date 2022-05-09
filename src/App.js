import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.css';
import data from './constants/data';
import Player from './components/Player'

function App() {
    const [players, updatePlayers] = useState(data.players);

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
                    <Droppable droppableId="players">
                        {(provided, snapshot) => (
                            <ul id="players" {...provided.droppableProps} ref={provided.innerRef} className={snapshot.isDraggingOver ? 'isDraggingOver' : ''} >
                                <h3>Available players</h3>
                                {players.map((player, index) => {
                                    return <Player key={player.id} player={player} id={player.id} index={index} />
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
        </div>
    );
}

export default App;