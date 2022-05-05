import React from 'react'
import SessionCard from './SessionCard'

export default function SessionCardList({ sessionList, onStartEditSession, onDeleteSession }) {

  return (
    <div className='row'>
      { sessionList.map(session => (
        <div className='col-md-4 my-2' key={session.id} >
          <SessionCard session={session} onStartEditSession={onStartEditSession} onDeleteSession={onDeleteSession} />
        </div>
      ))}
    </div>
  )
}
