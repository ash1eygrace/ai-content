import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'

const { Configuration, OpenAIApi } = require('openai')

class ProductDescription extends Component {
    constructor() {
        super()
        this.state = {
            heading: `The response from AI will show here`,
            response: `...getting content from the AI`
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
                    <h1>Generate a Product Description with AI</h1>
                    <br></br>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter the product you want to generate a description for: </Form.Label>
                            <Form.Control type="text" name="productName" placeholder="Enter product here" />
                        </Form.Group>
                        <Button variant="primary" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>
            <br></br>
                    <Card className="text-center">
                        <Card.Header><h2>{this.state.heading}</h2></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <p>{this.state.response}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default ProductDescription;