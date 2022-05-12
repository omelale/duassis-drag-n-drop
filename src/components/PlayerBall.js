import React from 'react'

const calcPosition = (team, role) => {
    if (team % 2 === 0) {
        // right team
        switch (role) {
            case 'gk':
                return { position: 'absolute', top: '50%', right: '8%' }
            case 'rd':
                return { position: 'absolute', top: '30%', right: '25%' }
            case 'ld':
                return { position: 'absolute', top: '60%', right: '25%' }
            case 'cm':
                return { position: 'absolute', top: '50%', right: '50%' }
            case 'ra':
                return { position: 'absolute', top: '23%', right: '80%' }
            case 'la':
                return { position: 'absolute', top: '69%', right: '80%' }
            default:
                return { position: 'absolute', top: '50%', right: '8000%' }
        }
    }
    switch (role) {
        case 'gk':
            return { position: 'absolute', top: '50%', left: '8%' }
        case 'rd':
            return { position: 'absolute', top: '70%', left: '26%' }
        case 'ld':
            return { position: 'absolute', top: '25%', left: '26%' }
        case 'cm':
            return { position: 'absolute', top: '50%', left: '50%' }
        case 'ra':
            return { position: 'absolute', top: '70%', left: '75%' }
        case 'la':
            return { position: 'absolute', top: '25%', left: '75%' }
        default:
            return { position: 'absolute', top: '50%', left: '2000%' }
    }
}
function PlayerBall(props) {
    const bgcolor = props.team % 2 === 0 ? 'white' : 'black'
    return (
        <div className="player-position" style={calcPosition(props.team, props.role.id)}>
            <div className="player-ball" style={{ backgroundColor: bgcolor }}></div>
            <div className="name">{props.player.name}</div>
        </div>
    )
}

export default PlayerBall