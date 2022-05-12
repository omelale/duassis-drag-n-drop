import React from 'react'
import PlayerBall from './PlayerBall'

function Teamfield(props) {
    return (
        <div className="teamfield" >
            <div className="team-info">
                <h2 className="team-name">
                    {props.team.name}
                </h2>
            </div>
            <div className="team-line-up">
                {props.team.playerIds.map((playerId, index) => {
                    const player = props.players.find(p => p.id === playerId)
                    const role = index + 1 <= props.players.length/2 ? props.roles[index] : 999;
                    return <PlayerBall team={props.team.id} player={player} role={role} key={player.id} />
                })}
            </div>
        </div>
    )
}

export default Teamfield