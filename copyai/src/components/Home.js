import React from 'react'
import { Component } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <p>Some content will go here</p>
                <Container>
                <Row>
                    <Col>
                    <Card className="text-center">
                        <Card.Header><h2>Product Description</h2></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <p>Generate an awesome Product Description</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="text-center">
                        <Card.Header><h2>Company Bio</h2></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <p>Generate an awesome Company Bio</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className="text-center">
                        <Card.Header><h2>Blog Intro</h2></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <p>Generate an awesome Blog Into Paragraph</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>

            </div>
        )
    }
}

export default Home;