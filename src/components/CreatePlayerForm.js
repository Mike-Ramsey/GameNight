import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function CreatePlayerForm({ addPlayer }) {  
const [playerName, setPlayerName] = useState('');
const [playerEmail, setPlayerEmail] = useState('');
const [playerPhone, setPlayerPhone] = useState('');

const handleAddPlayer = (event) => {
  event.preventDefault();
  const newPlayer = {
    name: playerName,
    email: playerEmail,
    phone: playerPhone,
   
  };
  addPlayer(newPlayer);
  setPlayerName('');
  setPlayerEmail('');
  setPlayerPhone('');
};

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
      <Button variant='primary' size='sm' onClick={handleAddPlayer}>Add Player</Button>
    </Form>      
  </div>
)
}
