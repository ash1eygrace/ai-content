import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { GeneratorList } from '../../data/GeneratorList';

function RenderGenerators() {
    const Generator = GeneratorList.map((generator) => {
        return ( 
            <Col sm={6}>
                <Card className="text-center">
                    <Card.Header><h2>{generator.title}</h2></Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <p>{generator.description}</p>
                        <Button href={generator.link}>{generator.title}</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    );
    return (
        <Row id="list-generators">
            {Generator}
        </Row>
    );
}

function Generators() {
    return (
        <div id="generators">
            <h1>Content Generators</h1>
            <Container>
                <RenderGenerators />
            </Container>
        </div>
    );
}

export default Generators;