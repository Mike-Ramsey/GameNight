import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import CalendarPage from './components/CalendarPage';
import GamesPage from './components/GamesPage';
import HomePage from './components/HomePage';
import PlayersPage from './components/PlayersPage';


export default function App() {


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
          <Route path="/" element={<HomePage />} />
          <Route path="/games/" element={<GamesPage />} />
          <Route path="/players/" element={<PlayersPage />} />
          <Route path="/calendar/" element={<CalendarPage />} />
        </Routes>
      </Container>
    </>
  );
};
