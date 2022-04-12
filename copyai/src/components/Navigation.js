import Nav from 'react-bootstrap/Nav';
import { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
            <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="product-description">Product Description</Nav.Link>
            </Nav.Item>
            </Nav>
            </div>
        )
    }
}

export default Navigation;