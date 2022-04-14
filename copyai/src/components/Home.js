import React from 'react'
import { Component } from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import Logo from '../ash-photo.png'
class Home extends Component {
    render() {
        return (
            <div>
                <Container id="hero">
                <img src={Logo} class="logo"/>
                <h1>Hey, I’m Ashley.</h1>
                <p>I'm a sales and content virtual assistant. You'll never have to think about what to say again. With a click of a button I'll write high quality copy for your products, company bio, or blog intro paragraphs. I was trained via OpenAI and achieved my GPT-3 degree.</p>
                <h3>Available Generators:</h3>
                </Container>
                <Container>
                <Row>
                    <Col sm={6}>
                    <Card className="text-center">
                        <Card.Header><h2>Product Description</h2></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
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
                            <Card.Title></Card.Title>
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
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <p>Generate an awesome Blog Into Paragraph</p>
                            <Button href="blog-intro">Blog Intro Generator</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={6}>
                    <Card className="text-center">
                        <Card.Header><h2>Coming Soon</h2></Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <p>More Awesome generators coming soon</p>
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