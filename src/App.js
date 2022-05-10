import React, { useEffect, useLayoutEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import data from './constants/data';
import Team from './components/Team';
import Save from './components/Save';

function App() {
    const teamNumber = data.teams;
    const players = data.players;
    const playersPerTeam = players.length / teamNumber;
    const [teams, setTeams] = useState(data.sq);
    const [saveStatus, setSaveStatus] = useState(false);
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    const checkSaveStatus = () => {
        if (Number.isInteger(playersPerTeam)){
            let update = true;
            for (let i = 1; i < teams.length; i++){
                if(teams[i].playerIds.length !== playersPerTeam){
                    update = false;
                }
            }
            if (update){
                setSaveStatus(true);
            } else {
                setSaveStatus(false);
            }
        } 
        //TODO ca me bo nese nuk jane numra te pjesetueshem per skuadra ose lojtare?
    }
    const handleOnDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            checkSaveStatus()
            return;
        }
        const start = teams[source.droppableId];
        const finish = teams[destination.droppableId];
        if (start === finish) {
            const newPlayerIds = Array.from(start.playerIds);
            newPlayerIds.splice(source.index, 1);
            newPlayerIds.splice(parseInt(destination.index), 0, parseInt(draggableId));
            const newTeam = {
                ...start,
                playerIds: newPlayerIds,
            };
            setTeams(
                teams.map((team) => {
                    return team.id === newTeam.id ? newTeam : team;
                })
            )
            return;
        }
        const sourcePlayerIds = Array.from(start.playerIds);
        sourcePlayerIds.splice(source.index, 1);
        const sourceTeam = {
            ...start,
            playerIds: sourcePlayerIds,
        };
        const destinationPlayerIds = Array.from(finish.playerIds);
        destinationPlayerIds.splice(parseInt(destination.index), 0, parseInt(draggableId));
        const destinationTeam = {
            ...finish,
            playerIds: destinationPlayerIds,
        };
        setTeams(
            teams.map(team => {
                if (team.id === sourceTeam.id) {
                    return sourceTeam;
                } else if (team.id === destinationTeam.id) {
                    return destinationTeam;
                }
                return team;
            })
        );
        return;
    }
    const detectSize = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    useLayoutEffect(()=>{
        checkSaveStatus()
    },[teams])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Drag and drop the player into the team you wish</h1>
            </header>
            <div className="container">
                <div className='teamContainer' >
                    <DragDropContext onDragEnd={handleOnDragEnd} >
                        {
                            teams.map(team => {
                                const teamPlayers = team.playerIds.map(playerId => players.find(p => p.id === playerId));
                                return <Team key={team.id} players={teamPlayers} id={team.id} name={team.name} width={windowDimension.width} />
                            })
                        }
                    </DragDropContext>
                </div>
                {saveStatus &&
                    (<Save/>)
                }
            </div>
        </div>
    );
}

export default App;