import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require('openai')

class ProductDescription extends Component {
    constructor() {
        super()
        this.state = {
            heading: `The response from AI will show here`,
            response: `Product description from AI will show here.`
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
            prompt: `Write a persuasive and exciting product description for: ${formDataObj.productName}`,
            temperature: 0.85,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            this.setState({
                heading: `Product Description for: ${formDataObj.productName}`,
                response: `${response.data.choices[0].text}`
            })
        }); 
    }

    render () {
        return (
            <div id="main-content">
                <Container>
                <h1>Product Description</h1>
                <Row>
                <Col xs={6} md={4}>
                <p id="pageDescription">Enter your your product and a few keywords that you'd like to include in your output. Click Submit and get a product description generated for you by AI. Think less and sell more.</p>

                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="textArea">
                            <Form.Label>Product Name & Purpose:</Form.Label>
                            <Form.Control as="textarea" name="productName" placeholder="e.g. Dunder Mifflin the best paper company " />
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

export default ProductDescription;