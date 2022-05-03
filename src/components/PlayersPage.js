import React, { useEffect, useState } from 'react'
import { createPlayer, deletePlayer, updatePlayer } from '../services/PlayerService';
import CreatePlayerForm from './CreatePlayerForm'
import EditPlayerForm from './EditPlayerForm';
import PlayerCardList from './PlayerCardList'

export default function PlayersPage({ playerList, refreshPlayers }) {
  const initialPlayer = { name: '', email: '', phone: '' };
  const [editPlayer, setEditPlayer] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);

  useEffect(() => {
    refreshPlayers();
  }, []);

  const handleAddPlayer = async (newPlayer) => {
    await createPlayer(newPlayer);  
    refreshPlayers();
  };

  const handleDeletePlayer = async (player) => {   
    await deletePlayer(player);
    refreshPlayers();
  };
   
  const startEditPlayer = (player) => {
    setEditPlayer(true);
    setCurrentPlayer(player);
  };

  const handleEditPlayer = async (currentPlayer) => {
    await updatePlayer({ ...currentPlayer, name: currentPlayer.name, email: currentPlayer.email, phone: currentPlayer.phone });
    setCurrentPlayer(initialPlayer);
    refreshPlayers();
  };

  return (
    <>
      <div className='row'>
        {editPlayer ? (
          <div className='col-md-6'>
            <EditPlayerForm currentPlayer={currentPlayer} setEditPlayer={setEditPlayer} handleEditPlayer={handleEditPlayer} />
          </div>
        ) : (
          <div className='col-md-6'>
             <CreatePlayerForm addPlayer={handleAddPlayer} />
          </div>
        )}      
      </div>
      <PlayerCardList playerList={playerList} onStartEditPlayer={startEditPlayer} onDeletePlayer={handleDeletePlayer} />
    </>
  )
}
