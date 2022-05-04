import React from 'react';
import GameCard from './GameCard';

export default function GameCardList({ gameList, onStartEditGame, onDeleteGame }) {
  return (
    <div className='row'>
      { gameList.map(game => (
        <div className='col-md-4 my-2' key={game.id}>
          <GameCard game={game} onStartEditGame={onStartEditGame} onDeleteGame={onDeleteGame} />
        </div>
      ))}
    </div>
  )
}
