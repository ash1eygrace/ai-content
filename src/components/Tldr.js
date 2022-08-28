import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js'

class Tldr extends Component {
    constructor() {
        super()
        this.state = {
            heading: `AI Generated Response:`,
            response: `The TL;DR description generated by the AI will show here.`
        }
    }
    
    onFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())

        const prompt = `${formDataObj.longParagraph}.\n\nTl;dr`;

        callAPI(prompt).then((data) => {
            this.setState({
                heading: `TL;DR for your text:`,
                response: data
            })
        }); 
    }

    render () {
        return (
        <div id="main-content">
        <Container>
        <Row>
        <Col xs={6} md={4}>
        <h1>TL;DR</h1>
        <p id="pageDescription">Enter the paragraph you'd like a TL;DR for.</p>

        <Form onSubmit={this.onFormSubmit}>
        <Form.Group className="mb-3" controlId="textArea">
            <Form.Label>Paragraph:</Form.Label>
            <Form.Control as="textarea" name="longParagraph" placeholder="paste your text here" />
        </Form.Group>
        <Button variant="primary" size="md" type="submit">Submit</Button>
        </Form>
        </Col>
        
        <Col xs={12} md={8}>
        <Card className="text-center">
            <Card.Header><h2>{this.state.heading}</h2></Card.Header>
            <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <p>{this.state.response}</p>
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </div>
        );
    }
}

export default Tldr;