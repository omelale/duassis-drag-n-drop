import React from 'react'

function PlayerBall(props) {
  console.log(props);
  return (
    <div className="player-ball">{props.player.name}</div>
  )
}

export default PlayerBall