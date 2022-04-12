import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card} from 'react-bootstrap'
// const { Configuration, OpenAIApi } = require ("openapi");

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
        console.log(formDataObj.productName)

        this.setState({
            heading: `Product Description for: ${formDataObj.productName}`,
            response: `...getting content from the AI`
        })
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