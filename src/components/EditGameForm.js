import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function EditGameForm({ currentGame, setEditGame, handleEditGame }) {

  const [game, setGame] = useState(currentGame);
  const [gameTitle, setGameTitle] = useState(currentGame.title);
  const [gameMinPlayers, setGameMinPlayers] = useState(currentGame.minPlayers);
  const [gameMaxPlayers, setGameMaxPlayers] = useState(currentGame.maxPlayers);

  useEffect(() => {
    setGame(currentGame)
  }, [])

  const update = () => {
    handleEditGame({
      id: currentGame.id,
      title: gameTitle,
      minPlayers: gameMinPlayers,
      maxPlayers: gameMaxPlayers
    });
    setEditGame(false);
  }

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
        <Form.Group controlId='formFile'>
          <Form.Label>Instructions</Form.Label>
          <Form.Control type='file'  />
        </Form.Group>
        <Form.Group controlId='formFile'>
          <Form.Label>Game Image</Form.Label>
          <Form.Control type='file'  />
        </Form.Group>
        <br/>
        <Button variant='primary' size='sm' onClick={update}>Save Changes</Button>{'  '}
        <Button variant='warning' size='sm' onClick={() => setEditGame(false)}>Cancel</Button>
      </Form>      
    </div>
  )
}
