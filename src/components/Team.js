import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Player from './Player'


function Team(props) {
    return (
        <Droppable droppableId={props.id.toString()} className="container">
            {(provided, snapshot) => (
                <div id="players" {...provided.droppableProps} ref={provided.innerRef} className={snapshot.isDraggingOver ? 'isDraggingOver' : ''} >
                    <h3>{props.name}</h3>
                    {props.players.map((player, index) => {
                        return <Player key={player.id} player={player} id={player.id} index={index} />
                    })}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default Team