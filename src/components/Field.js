import React from 'react'

function Field(props) {
    const teams = props.teams.filter((team) => team.id !== 0);
    
    return (
        <div className="field-container">

        </div>
    )
}

export default Field