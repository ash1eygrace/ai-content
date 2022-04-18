import { Link, Nav, Navbar, Container} from 'react-bootstrap';
import React, { Component }  from 'react';

class Navigation extends Component {
    render() {
        return (
            <div id="navigation">
                <Navbar expand="md">
                <Container>
                    <Nav>
                    <Navbar.Brand href="/">AshAI</Navbar.Brand>
                    </Nav>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="product-description">Product Description</Nav.Link>
                        <Nav.Link href="company-bio">Company Bio</Nav.Link>
                        <Nav.Link href="blog-intro">Blog Intro</Nav.Link>
                        <Nav.Link href="li-job-description">LinkedIn Job Description</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;