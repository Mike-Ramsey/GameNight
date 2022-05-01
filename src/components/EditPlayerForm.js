import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export default function EditPlayerForm({ currentPlayer, setEditPlayer, handleEditPlayer }) {

  const [player, setPlayer] = useState(currentPlayer);
  const [playerName, setPlayerName] = useState(currentPlayer.name);
  const [playerEmail, setPlayerEmail] = useState(currentPlayer.email);
  const [playerPhone, setPlayerPhone] = useState(currentPlayer.phone);

  useEffect(() => {
    setPlayer(currentPlayer)
  }, [])

  const update = () => {
    handleEditPlayer({
      id: currentPlayer.id,
      name: playerName,
      email: playerEmail,
      phone: playerPhone
    });
    setEditPlayer(false);
  }

  return (
    <div className="row my-3">
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Player Name</Form.Label>
          <Form.Control type='text' value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder='Enter name' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' value={playerEmail} onChange={(e) => setPlayerEmail(e.target.value)} placeholder='Enter email address' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='text' value={playerPhone} onChange={(e) => setPlayerPhone(e.target.value)} placeholder='Enter phone number' />
        </Form.Group>
        <br/>
        <Button variant='primary' size='sm' onClick={update}>Save Changes</Button>{'  '}
        <Button variant='warning' size='sm' onClick={() => setEditPlayer(false)}>Cancel</Button>
      </Form>      
    </div>
  )
}
