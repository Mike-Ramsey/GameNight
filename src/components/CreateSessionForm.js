import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';

export default function CreateSessionForm({ addSession, gameList, playerList }) {
  const [sessionDate, setSessionDate] = useState('');
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [sessionGame, setSessionGame] = useState('');
  const [sessionNotes, setSessionNotes] = useState('');  

  const handleAddSession = (event) => {
    event.preventDefault();
    const newSession = {
      date: sessionDate,
      players: sessionPlayers,
      game: sessionGame,
      notes: sessionNotes
    };
    addSession(newSession);
    setSessionDate('');
    setSessionPlayers([]);
    setSessionGame('');
    setSessionNotes('');
  };

  return (
    <div className='row my-3'>
      <h3>Schedule a GameNight!</h3>
      <Form>
        <Form.Group>
          <Form.Label>Session Date</Form.Label>
          <Form.Control type='date' value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} />
        </Form.Group>
        <br/>
        <Form.Select onChange={(e) => setSessionGame(e.target.value)}>
          <option>Select a Game</option>
          {gameList.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}:  {game.minPlayers}-{game.maxPlayers} players
            </option>
          ))}
        </Form.Select>
        <br/> 
        <Form.Group>
          <Form.Label>Add Players</Form.Label>
          {playerList.map((player) => (
            <Form.Check type='checkbox' key={player.id} value={sessionPlayers} label={player.name} onChange={(e) => {
              if (e.target.checked) {
                setSessionPlayers([ ...sessionPlayers, player.id ]);               
              } else {
                setSessionPlayers(sessionPlayers.filter((e) => e.id === player.id));
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
