import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import instructions from '../data/default-example.pdf';
import image from '../data/default-example.jpg';

export default function GameCard({ game, onStartEditGame, onDeleteGame }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: '18rem' }} bg={'light'} text={'dark'} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>
        {game.minPlayers} - {game.maxPlayers} players
        </Card.Text>
        <Button variant='primary' size='sm' onClick={handleShow}>Placeholder instructions</Button>
        <br/>
        <br/>
        <Button variant='success' size='sm' onClick={() => onStartEditGame(game)}>Edit</Button>{' '}
        <Button variant="danger" size='sm' onClick={() => onDeleteGame(game)} >Delete</Button>
      </Card.Body>
    </Card>
    <Modal show={show} fullscreen={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Placeholder Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe src={instructions} frameBorder='0' scrolling='auto' height='100%' width='100%' ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
