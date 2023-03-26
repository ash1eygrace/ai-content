import React, { useState } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js';

const GeneratorComponent = (props) => {
  const [heading, setHeading] = useState('AI Generated Response:');
  const [response, setResponse] = useState(props.generatorData.response1);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prompt = `${props.generatorData.prompt}${formData.get(props.generatorData.formName)}`;

    const { response2 = '', response3 = '' } = props.generatorData;
    setHeading(response2 + formData.get(props.generatorData.formName));
    setResponse('');
    callAPI(prompt).then((data) => {
      setHeading(response3 + formData.get(props.generatorData.formName));
      setResponse(data);
    });
  };

  const { h1, description, formLabel, formName, placeholder } = props.generatorData;

  return (
    <div id="main-content">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h1>{h1}</h1>
            <p id="pageDescription">{description}</p>

            <Form onSubmit={onFormSubmit}>
              <Form.Group controlId="textArea" className="mb-3">
                <Form.Label>{formLabel}</Form.Label>
                <Form.Control as="textarea" name={formName} placeholder={placeholder} />
              </Form.Group>
              <Button variant="primary" size="md" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          <Col xs={12} md={8}>
            <Card className="text-center">
              <Card.Header>
                <h2>{heading}</h2>
              </Card.Header>
              <Card.Body>
                {response && (
                  <Card.Text>
                    <p className="pre-wrap">{response}</p>
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeneratorComponent;