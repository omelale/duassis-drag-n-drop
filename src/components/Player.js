import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function Player(props) {
    return (
        <Draggable draggableId={props.id.toString()} index={props.index}>
            {(provided, snapshot) => (
                <div id="player" ref={provided.innerRef} className={snapshot.isDragging ? 'dragging' : ''} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <p>
                        {props.player.name + ' ' + props.player.lastName}
                    </p>
                </div>
            )}
        </Draggable>
    )
}

export default Player