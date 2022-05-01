import React, { useEffect, useState } from 'react'
import { createPlayer, deletePlayer, getPlayers, updatePlayer } from '../services/PlayerService';
import CreatePlayerForm from './CreatePlayerForm'
import EditPlayerForm from './EditPlayerForm';
import PlayerCardList from './PlayerCardList'

export default function PlayersPage() {
  const [playerList, setPlayerList] = useState([]);
  const initialPlayer = { name: '', email: '', phone: '' };
  const [editPlayer, setEditPlayer] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);

  const refreshPlayer = async () => {
    const freshPlayers = await getPlayers();
    setPlayerList((freshPlayers) ? freshPlayers : [] );
  };

  useEffect(() => {
    refreshPlayer();
  }, []);

  const handleAddPlayer = async (newPlayer) => {
    await createPlayer(newPlayer);  
    refreshPlayer();
  };

  const handleDeletePlayer = async (player) => {   
    await deletePlayer(player);
    refreshPlayer();
  };
   
  const startEditPlayer = (player) => {
    setEditPlayer(true);
    setCurrentPlayer(player);
  };

  const handleEditPlayer = async (currentPlayer) => {
    await updatePlayer({ ...currentPlayer, name: currentPlayer.name, email: currentPlayer.email, phone: currentPlayer.phone });
    setCurrentPlayer(initialPlayer);
    refreshPlayer();
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
