import React, { useEffect, useState } from 'react'
import { createSession, deleteSession, updateSession } from '../services/SessionService';
import CreateSessionForm from './CreateSessionForm';
import EditSessionForm from './EditSessionForm';
import SessionCardList from './SessionCardList';

export default function HomePage({ gameList, playerList, sessionList, refreshSessions, refreshGames, refreshPlayers }) {
  const initialSession = { date: '', players: [], game: '', notes: '' };
  const [editSession, setEditSession] = useState(false);
  const [currentSession, setCurrentSession] = useState(initialSession);

  useEffect(() => {
    refreshSessions();
    refreshGames();
    refreshPlayers();
  }, []);

  const handleAddSession = async (newSession) => {
    await createSession(newSession);  
    refreshSessions();
  };

  const handleDeleteSession = async (session) => {   
    await deleteSession(session);
    refreshSessions();
  };
   
  const startEditSession = (session) => {
    setEditSession(true);
    setCurrentSession(session);
  };

  const handleEditSession = async (currentSession) => {
    await updateSession({ ...currentSession, date: currentSession.date, players: currentSession.players, game: currentSession.game, notes: currentSession.notes });
    setCurrentSession(initialSession);
    refreshSessions();
  };

  return (
    <>
      <div className='row'>
        {editSession ? (
          <div className='col-md-6'>
            <EditSessionForm 
              currentSession={currentSession} 
              setEditSession={setEditSession} 
              handleEditSession={handleEditSession} 
              gameList={gameList} 
              playerList={playerList} 
            />
          </div>
        ) : (
          <div className='col-md-6'>
             <CreateSessionForm 
              addSession={handleAddSession} 
              gameList={gameList} 
              playerList={playerList} 
            />
          </div>
        )}      
      </div>
      <SessionCardList 
        sessionList={sessionList} 
        onStartEditSession={startEditSession} 
        onDeleteSession={handleDeleteSession} 
      />
    </>
  )
}
