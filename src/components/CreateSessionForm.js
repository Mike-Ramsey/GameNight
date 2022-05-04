import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export default function CreateSessionForm({ addSession, gameList, playerList }) {
  const [sessionDate, setSessionDate] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [sessionGame, setSessionGame] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');
 
  const handleAddSession = (event) => {
    event.preventDefault();
    const newSession = {
      date: sessionDate,
      time: sessionTime,
      players: sessionPlayers,
      game: sessionGame,
      notes: sessionNotes
    };
    addSession(newSession);
    setSessionDate('');
    setSessionTime('');
    setSessionPlayers([]);
    setSessionGame('');
    setSessionNotes('');
  };

  return (
    <div className='row my-3'>
      <h3>Schedule a GameNight!</h3>
      <Form id='session-form'>
        <Form.Group>
          <Form.Label>Session Date and Time</Form.Label>
          <Form.Control size='sm' type='date' value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} />
          <Form.Control size='sm' type='time' value={sessionTime} onChange={(e) => setSessionTime(e.target.value)} />
        </Form.Group>
        <br/>
        <Form.Label>Choose a Game</Form.Label>
        <Form.Select size='sm' onChange={(e) => setSessionGame(e.target.value)}>
          <option>-</option>
          {gameList.map((game) => (
            <option key={game.id} value={game.title}>
              {game.title}:  {game.minPlayers}-{game.maxPlayers} players
            </option>
          ))}
        </Form.Select>
        <br/> 
        <Form.Group>
          <Form.Label>Choose Players</Form.Label>
          {playerList.map((player) => (
            <Form.Check type='checkbox' key={player.id}  label={player.name} onChange={(e) => {
              if (e.target.checked) {
                setSessionPlayers([ ...sessionPlayers, player]);               
              } else {
                setSessionPlayers(sessionPlayers.filter((e) => e.id !== player.id));
              }
            }} />
          ))}
        </Form.Group>
        <br/> 
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control as='textarea' rows={3} value={sessionNotes} onChange={(e) => setSessionNotes(e.target.value)}/>
        </Form.Group>
        <Button variant='primary' size='sm my-3' onClick={handleAddSession} >Add Session</Button>
      </Form>

    
    </div>
  )
}
