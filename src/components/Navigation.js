import { Nav, Navbar, Container } from 'react-bootstrap';
import React, { Component } from 'react';

const Navigation = React.memo(() => (
    <div id="navigation">
        <Navbar expand="md">
            <Container>
                <Nav>
                    <Navbar.Brand href="/">AshAI</Navbar.Brand>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="generators">Generators</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
));

export default Navigation;