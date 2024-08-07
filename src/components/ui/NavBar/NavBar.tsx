import React, { FC } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        {
          /*
           <Link to='/'>Home</Link>
          <Link to='/new'>New</Link>
          <Link to='/thumbnail'>Thumbnail</Link>
          */
        }
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
          <Nav.Link href="/editor/1">Edit id:1</Nav.Link>
          <Nav.Link href="/new">Nouveau</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
