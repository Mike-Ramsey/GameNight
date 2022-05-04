import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

export default function SessionCard({ session, onStartEditSession, onDeleteSession }) {


  return (
    <>
    <Card style={{ width: '18rem' }} bg={'light'} text={'dark'}>
      <Card.Body>
        <Card.Title>{session.game} GameNight!</Card.Title>
        <Card.Text>
          {session.date} at {session.time}
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
        <Button variant='success' size='sm' onClick={() => onStartEditSession(session)}>Edit</Button>{' '}
        <Button variant="danger" size='sm' onClick={() => onDeleteSession(session)} >Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
}
