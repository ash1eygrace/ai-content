import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { generatorList } from '../../data/generatorList';
import GeneratorCard from './GeneratorCard';

function Generators() {
    return (
        <div id="main" className='generators'>
            <h1>Content Generators</h1>
            <Container>
                <Row id="list-generators">
                    {generatorList.map((generator) => (
                        <GeneratorCard key={generator.id} generator={generator} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Generators;
