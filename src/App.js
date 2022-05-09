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
            {(provided, snapshot) => (
              <ul id="players" {...provided.droppableProps} ref={provided.innerRef} isDraggingOver={snapshot.isDraggingOver} className={snapshot.isDraggingOver ? 'isDraggingOver' : ''} >
                <h3>Available players</h3>
                {players.map(({ id, name, lastName }, index) => {
                  return (
                    <Draggable key={id} draggableId={id.toString()} index={index}>
                      {(provided, snapshot) => (
                        <li ref={provided.innerRef} className={snapshot.isDragging ? 'dragging' : ''} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} >
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