import React from 'react'
import { Droppable } from 'react-beautiful-dnd';


function Role(props) {
  return (
      <Droppable droppableId={(props.id + props.team).toString()}>
          {(provided, snapshot) => (
              <div id="role-container" {...provided.droppableProps} ref={provided.innerRef} className={snapshot.isDraggingOver ? 'isDraggingOver' : ''} >
                  
                  {provided.placeholder}
              </div>
          )}
      </Droppable>
  )
}

export default Role