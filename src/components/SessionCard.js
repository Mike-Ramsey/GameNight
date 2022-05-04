import React, { useState } from 'react'
import { Button, Card, ListGroup, Modal } from 'react-bootstrap'

export default function SessionCard({ session, onStartEditSession, onDeleteSession }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card bg='light' text='dark' border='dark'>
      <Card.Body>
        <Card.Header as='h4'>{session.game}</Card.Header>
        <br/>
        <Card.Text>
          Date: {session.date}<br/>
          Time: {session.time}
          <br/>
          <br/>
          With featured guests:
        </Card.Text>
        <ListGroup variant='flush'>
        {session.players.map((player, index) => {
          return (
            <ListGroup.Item key={index}>{player.name}</ListGroup.Item>
          )
        })}
        </ListGroup>
        <br/>
        <Button variant='primary' size='sm' onClick={handleShow}>Notes</Button>
        <br/>
        <br/>
        <Button variant='success' size='sm' onClick={() => onStartEditSession(session)}>Edit</Button>{' '}
        <Button variant="danger" size='sm' onClick={() => onDeleteSession(session)} >Delete</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notes for {session.date}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {session.notes}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
