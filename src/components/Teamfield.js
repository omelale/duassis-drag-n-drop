import React from 'react'
import PlayerBall from './PlayerBall'

function Teamfield(props) {
    return (
        <div className="teamfield" >
            <h2 className="team-name">{props.team.name}</h2>
            {props.team.playerIds.map((playerId, index) => {
                const player = props.players.find(p => p.id === playerId)
                const role = props.roles[index];
                return <PlayerBall player={player} role={role} key={player.id}/>
            })}
        </div>
    )
}

export default Teamfield