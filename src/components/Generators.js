import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
function RenderGenerators() {
    const generators = [
        {
            id: 1,
            title: 'Blog Post Ideas',
            description: 'Stuck in the idea phase? Generate ideas',
            link: 'blogideas'
        },
        {
            id: 2,
            title: 'Product Description',
            description: 'Generate an awesome Product Description',
            link: 'product-description'
        },
        {
            id: 3,
            title: 'Company Bio',
            description: 'Generate an awesome Company Bio',
            link: 'company-bio'
        },
        {
            id: 4,
            title: 'SEO Blog Intro',
            description: 'Generate an awesome SEO blog into paragraph',
            link: 'blog-intro'
        },
        {
            id: 5,
            title: 'LinkedIn Job Description',
            description: 'Generate a knowledgeable LinkedIn Job Description',
            link: 'li-job-description'
        },
        {
            id: 6,
            title: 'TL;DR',
            description: 'Summarize verbose text into a TL;DR.',
            link: 'li-job-description'
        }
    ]
    const Generator = generators.map (
        (generator) => {
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