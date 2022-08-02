import React from 'react'
import { Component } from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'


class Generators extends Component {
render() {
    return (
        <div id="generators">               
        <h1>Content Generators</h1>
        <Container>
        <Row>
        <Col sm={6}>
        <Card className="text-center">
            <Card.Header><h2>Product Description</h2></Card.Header>
            <Card.Body>
                <Card.Text>
                <p>Generate an awesome Product Description</p>
                <Button href="product-description">Product Description Generator</Button>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={6}>
        <Card className="text-center">
            <Card.Header><h2>Company Bio</h2></Card.Header>
            <Card.Body>
                <Card.Text>
                <p>Generate an awesome Company Bio</p>
                <Button href="company-bio">Company Bio Generator</Button>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={6}>
        <Card className="text-center">
            <Card.Header><h2>Blog Intro</h2></Card.Header>
            <Card.Body>
                <Card.Text>
                <p>Generate an awesome Blog Into Paragraph</p>
                <Button href="blog-intro">Blog Intro Generator</Button>
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={6}>
        <Card className="text-center">
            <Card.Header><h2>LinkedIn Job Description</h2></Card.Header>
            <Card.Body>
                <Card.Text>
                 <p>Generate a knowledgeable LinkedIn Job Description</p>
                <Button href="li-job-description">Job Description Generator</Button>
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
export default Generators;