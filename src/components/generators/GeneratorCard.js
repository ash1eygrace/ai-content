import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const GeneratorCard = ({ generator }) => (
    <Col sm={6}>
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
);

export default GeneratorCard;
