import React from 'react'

function Teamfield(props) {
    console.log( props.team );
  return (
    <div className="teamfield" >
          <h2 className="team-name">{props.team.name}</h2>
    </div>
  )
}

export default Teamfield