import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require('openai')

class CompanyBio extends Component {
    constructor() {
        super()
        this.state = {
            heading: `The response from AI will show here`,
            response: `Company bio from AI will show here.`
        }
    }
    
    onFormSubmit = e => {

        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())


        // OpenAI davinci completion
        const configuration = new Configuration({
            apiKey: 'API KEY GOES HERE',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-davinci-002", {
            prompt: `Write a persuasive and exciting company bio for: ${formDataObj.companyName}`,
            temperature: 0.85,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({
                heading: `company bio for: ${formDataObj.companyName}`,
                response: `${response.data.choices[0].text}`
            })
        }); 
    }

    render () {
        return (
            <div id="main-content">
                <Container>
                <Row>
                <Col xs={6} md={4}>
                <h1>Company Bio</h1>
                <p id="pageDescription">Enter your company name and a few keywords that you'd like to include in your output. Click Submit and get a company bio generated for you by AI. Think less and sell more.</p>

                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="textArea">
                            <Form.Label>Company Name & Purpose:</Form.Label>
                            <Form.Control as="textarea" name="companyName" placeholder="e.g. Dunder Mifflin the best paper company " />
                        </Form.Group>
                        <Button variant="primary" size="md" type="submit">
                            Submit
                        </Button>
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

export default CompanyBio;