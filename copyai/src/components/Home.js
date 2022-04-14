import React from 'react'
import { Component } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <Container id="hero">
                <h1>Content Generator</h1>
                <h2>Out of ideas?</h2>
                <p>We got you covered! With our content generator, you never have to think about what to say again. With a click of a button you'll get high quality copy straight from the top of the line AI for your products, company bio, or blog intro paragraphs.</p>
                <h3>Available Generators:</h3>
                </Container>
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