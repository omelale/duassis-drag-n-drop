import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Player from './Player'


function Team(props) {
    return (
        <Droppable droppableId="players">
            {(provided, snapshot) => (
                <ul id="players" {...provided.droppableProps} ref={provided.innerRef} className={snapshot.isDraggingOver ? 'isDraggingOver' : ''} >
                    {props.players.map((player, index) => {
                        return <Player key={player.id} player={player} id={player.id} index={index} />
                    })}
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
    )
}

export default Team