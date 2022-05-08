import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import data from './constants/data';

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
            {(provided) => (
              <ul className="players" {...provided.droppableProps} ref={provided.innerRef}>
                {players.map(({ id, name, lastName }, index) => {
                  return (
                    <Draggable key={id} draggableId={id.toString()} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            {name + ' ' + lastName}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
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