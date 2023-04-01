import React from 'react'
import { Component } from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import Logo from '../assets/images/logo.png'
import { GeneratorList } from '../data/GeneratorList';

const Home = () => {
    const featuredGenerators = GeneratorList.filter(
        (generator) => generator.featured
    );

    return (
        <div>
            <Container id="hero">
                <img src={Logo} class="logo" alt='Illustration of woman with long brown hair and purple back ground' />
                <h1>Hey, I’m AshAI.</h1>
                <p>I'm a sales and content virtual assistant. You'll never have to think about what to say again. With a click of a button I'll write high quality copy for your products, company bio, or blog intro paragraphs. I was trained via OpenAI and achieved my GPT-3 degree.</p>
                <h3>What I can do for you:</h3>
            </Container>
            <Container>
                <Row>
                    {featuredGenerators.map((generator) => (
                        <Col sm={6} key={generator.id}>
                            <Card className="text-center">
                                <Card.Header>
                                    <h2>{generator.title}</h2>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>{generator.description}</p>
                                        <Button href={generator.link}>{generator.title}</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;