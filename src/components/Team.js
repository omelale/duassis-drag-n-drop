import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import Player from './Player'
import Role from './Role'


function Team(props) {
    return (
        <div id="players">
            <h3>{props.name}</h3>
            <Droppable droppableId={props.id.toString()}>
                {(provided, snapshot) => (
                    <div id="player-container" {...provided.droppableProps} ref={provided.innerRef} className={snapshot.isDraggingOver ? 'isDraggingOver' : ''} >
                        {props.players.map((player, index) => {
                            return <Player key={player.id} player={player} id={player.id} index={index} />
                        })}
                        {props.roles.map(role=>{
                            if (props.id!==0){
                                return <Role key={role.id} id={role.id} role={role} team={props.id} />
                            }
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default Team