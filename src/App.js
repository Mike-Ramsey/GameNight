import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import CalendarPage from './components/CalendarPage';
import GamesPage from './components/GamesPage';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';
import { getGames } from './services/GameService';
import { getPlayers } from './services/PlayerService';
import { getSessions } from './services/SessionService';

export default function App() {
  const [gameList, setGameList] = useState([]);
  const [playerList, setPlayerList] = useState([]);
  const [sessionList, setSessionList] = useState([]);

  const refreshGames = async () => {
    const freshGames = await getGames();
    setGameList((freshGames) ? freshGames : [] );
  };

  const refreshPlayers = async () => {
    const freshPlayers = await getPlayers();
    setPlayerList((freshPlayers) ? freshPlayers : [] );
  };

  const refreshSessions = async () => {
    const freshSessions = await getSessions();
    setSessionList((freshSessions) ? freshSessions : [] );
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>GameNight</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
          <Nav.Link as={NavLink} to="/games/">Games</Nav.Link>
          <Nav.Link as={NavLink} to="/players/">Players</Nav.Link>
          <Nav.Link as={NavLink} to="/calendar/">Calendar</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage gameList={gameList} playerList={playerList} sessionList={sessionList} refreshSessions={refreshSessions} refreshGames={refreshGames} refreshPlayers={refreshPlayers}/>} />
          <Route path="/games/" element={<GamesPage gameList={gameList} refreshGames={refreshGames} />} />
          <Route path="/players/" element={<PlayersPage playerList={playerList} refreshPlayers={refreshPlayers} />} />
          <Route path="/calendar/" element={<CalendarPage gameList={gameList} playerList={playerList}/>} />
        </Routes>
      </Container>
    </>
  );
};
