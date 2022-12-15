import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Head() {
  return (
    <>
		<Navbar bg="light" expand="lg">
      <Container className="head">
        <Navbar.Brand href="/" className="logo">
          <h1>Håvard Sollie</h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  )
}