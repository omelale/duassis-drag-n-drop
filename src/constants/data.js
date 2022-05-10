const teams = 2; 

const playersPerTeam = 6;

const players = [
    {
        id: 1,
        name: 'Shaban',
        lastName: 'R',
    },
    {
        id: 2,
        name: 'Andi',
        lastName: 'X',
    },
    {
        id: 3,
        name: 'Ajten',
        lastName: 'C',
    },
    {
        id: 4,
        name: 'Fabian',
        lastName: 'E',
    },
    {
        id: 5,
        name: 'Erik',
        lastName: 'K',
    },
    {
        id: 6,
        name: 'Bruno',
        lastName: 'B',
    },
    {
        id: 7,
        name: 'Aris',
        lastName: 'K',
    },
    {
        id: 8,
        name: 'Danjel',
        lastName: 'B',
    },
    {
        id: 9,
        name: 'Aldo',
        lastName: 'I',
    },
    {
        id: 10,
        name: 'Albi',
        lastName: 'X',
    },
    {
        id: 11,
        name: 'Erion',
        lastName: 'E',
    },
    {
        id: 12,
        name: 'Ketjon',
        lastName: 'F',
    },
    
];

const roles = [
    {
        id : 'gk',
        name: 'Goalkeeper'
    },
    {
        id : 'rd',
        name: 'Right Defender'
    },
    {
        id : 'ld',
        name: 'Left Defender'
    },
    {
        id : 'cm',
        name: 'Central Midfielder'
    },
    {
        id : 'La',
        name: 'Left Attacker'
    },
    {
        id : 'Ra',
        name: 'Right Attacker'
    },
]

const playerIds = players.map((player) => player.id);
const sq = [];
for (let i = 0; i <= teams; i++) {
    if (i === 0) {
        sq[i] = {
            'id': i,
            'name': `Available players`,
            'playerIds': playerIds
        }
    } else {
        sq[i] = {
            'id': i,
            'name': `Team-${i}`,
            'playerIds': [],
        }
    }
}

export default { teams, playersPerTeam, players, sq, roles}