import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function PlayerCard({ player, onStartEditPlayer, onDeletePlayer }) {
  return (
    <Card bg='light' text='dark' border='dark'>
    <Card.Body>
      <Card.Title>{player.name}</Card.Title>
      <br/>
      <Card.Text>Email: {player.email}</Card.Text>
      <Card.Text>Phone: {player.phone}</Card.Text>
      <Button variant='success' size='sm' onClick={() => onStartEditPlayer(player)}>Edit</Button>{' '}
      <Button variant="danger" size='sm' onClick={() => onDeletePlayer(player)} >Delete</Button>
    </Card.Body>
  </Card>
  )
}
