import React from 'react'
import Teamfield from './Teamfield'

function Field(props) {
    const teams = props.teams.filter((team) => team.id !== 0);
    return (
        <div className="field-container">
            {teams.map(team => {
                return <Teamfield team={team} key={team.id} players={props.players} roles={props.roles} />
            })}
        </div>
    )
}

export default Field