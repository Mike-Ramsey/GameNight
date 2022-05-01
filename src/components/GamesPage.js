import React, { useState, useEffect } from 'react';
import { getGames, createGame, deleteGame, updateGame } from '../services/GameService';
import CreateGameForm from './CreateGameForm';
import EditGameForm from './EditGameForm';
import GameCardList from './GameCardList';

export default function GamesPage() {
  const [gameList, setGameList] = useState([]);
  const initialGame = { title: '', minPlayers: '', maxPlayers: '' };
  const [editGame, setEditGame] = useState(false);
  const [currentGame, setCurrentGame] = useState(initialGame);

  const refreshGames = async () => {
    const freshGames = await getGames();
    setGameList((freshGames) ? freshGames : [] );
  };

  useEffect(() => {
    refreshGames();
  }, []);

  const handleAddGame = async (newGame) => {
    await createGame(newGame);  
    refreshGames();
  };

  const handleDeleteGame = async (game) => {   
    await deleteGame(game);
    refreshGames();
  };
   
  const startEditGame = (game) => {
    setEditGame(true);
    setCurrentGame(game);
  };

  const handleEditGame = async (currentGame) => {
    await updateGame({ ...currentGame, title: currentGame.title, minPlayers: currentGame.minPlayers, maxPlayers: currentGame.maxPlayers });
    setCurrentGame(initialGame);
    refreshGames();
  };



  return (
    <>
      <div className='row'>
        {editGame ? (
          <div className='col-md-6'>
            <EditGameForm currentGame={currentGame} setEditGame={setEditGame} handleEditGame={handleEditGame} />
          </div>
        ) : (
          <div className='col-md-6'>
             <CreateGameForm addGame={handleAddGame} />
          </div>
        )}      
      </div>
      <GameCardList gameList={gameList} onStartEditGame={startEditGame} onDeleteGame={handleDeleteGame} />
    </>
  )
}
