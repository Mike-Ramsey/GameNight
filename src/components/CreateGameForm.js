import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function CreateGameForm({ addGame }) {
  const [gameTitle, setGameTitle] = useState('');
  const [gameMinPlayers, setGameMinPlayers] = useState('');
  const [gameMaxPlayers, setGameMaxPlayers] = useState('');

  const handleAddGame = (event) => {
    event.preventDefault();
    const newGame = {
      title: gameTitle,
      minPlayers: gameMinPlayers,
      maxPlayers: gameMaxPlayers,
     
    };
    addGame(newGame);
    setGameTitle('');
    setGameMinPlayers('');
    setGameMaxPlayers('');
  };

  return (
    <div className="row my-3">
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Game Title</Form.Label>
          <Form.Control type='text' value={gameTitle} onChange={(e) => setGameTitle(e.target.value)} placeholder='Enter title' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Min Players</Form.Label>
          <Form.Control type='text' value={gameMinPlayers} onChange={(e) => setGameMinPlayers(e.target.value)} placeholder='Enter min number of players' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Max Players</Form.Label>
          <Form.Control type='text' value={gameMaxPlayers} onChange={(e) => setGameMaxPlayers(e.target.value)} placeholder='Enter max number of players' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Instructions</Form.Label>
          <Form.Control type='file'  />
        </Form.Group>
        <Form.Group>
          <Form.Label>Game Image</Form.Label>
          <Form.Control type='file'  />
        </Form.Group>
        <br/>
        <Button variant='primary' size='sm' onClick={handleAddGame}>Add Game</Button>
      </Form>      
    </div>
  )
}
