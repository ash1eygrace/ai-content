import React, { useState } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js';

import CopyToClipboard from './CopyToClipboard.js';
import LoadingSpinner from './LoadingSpinner.js';

const GeneratorComponent = (props) => {
  const [heading, setHeading] = useState('AI Generated Response:');
  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prompt = `${props.generatorData.prompt}${formData.get(props.generatorData.formName)}`;

    setHeading(`Thinking about your ${props.generatorData.title} now...`);
    setResponse('');
    setErrorMessage('');
    setIsFormSubmitted(true);
    setDataLoaded(false);
    callAPI(prompt).then((data) => {
      if (data.error) {
        setErrorMessage(data.message);
      } else {
        setHeading(`Your AI Generated ${props.generatorData.title}:`);
        setResponse(data);
      }
      setDataLoaded(true);
    });
  };

  const { title, description2, formLabel, formName, placeholder } = props.generatorData;

  return (
    <div id="main-content">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h1>{title}</h1>
            <p id="pageDescription">{description2}</p>
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
                {
                errorMessage ? 
                (
                  <p variant="danger" className="mt-3">{errorMessage}</p>
                ) 
                : dataLoaded && response ? 
                (
                  <div className="response-container">
                    <Card.Text>
                      <p className="pre-wrap">{response}</p>
                    </Card.Text>
                    {response && <CopyToClipboard text={response} />}
                  </div>
                ) 
                : !isFormSubmitted ? 
                (
                  <Card.Text>
                    The Response from the AI for your {title} will show here.
                  </Card.Text>
                ) 
                : 
                (
                  <LoadingSpinner />
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