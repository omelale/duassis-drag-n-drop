import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function Player(props) {
    // const { isDragging, ...rest } = props
    return (
        <Draggable draggableId={props.id.toString()} index={props.index}>
            {(provided, snapshot) => (
                <li ref={provided.innerRef} className={snapshot.isDragging ? 'dragging' : ''} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <p>
                        {props.player.name + ' ' + props.player.lastName}
                    </p>
                </li>
            )}
        </Draggable>
    )
}

export default Player