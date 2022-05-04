import React from 'react'
import PlayerCard from './PlayerCard'

export default function PlayerCardList({ playerList, onStartEditPlayer, onEditPlayer, onDeletePlayer }) {
  return (
    <div className='row'>
      { playerList.map(player => (
        <div className='col-md-3 my-2' key={player.id}>
          <PlayerCard player={player} onStartEditPlayer={onStartEditPlayer} onEditPlayer={onEditPlayer} onDeletePlayer={onDeletePlayer} />
        </div>
      ))}
    </div>
  )
}
