import React, { useState } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js';

import CopyToClipboard from './CopyToClipboard.js';

const GeneratorComponent = (props) => {
  const [heading, setHeading] = useState('AI Generated Response:');
  const [response, setResponse] = useState(props.generatorData.response1);
  const [errorMessage, setErrorMessage] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prompt = `${props.generatorData.prompt}${formData.get(props.generatorData.formName)}`;

    const { response2 = '', response3 = '' } = props.generatorData;
    setHeading(response2 + formData.get(props.generatorData.formName));
    setResponse('');
    setErrorMessage('');
    callAPI(prompt).then((data) => {
      if (data.error) {
        setErrorMessage(data.message);
      } else {
        setHeading(response3 + formData.get(props.generatorData.formName));
        setResponse(data);
        setDataLoaded(true);
      }
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
                {errorMessage && <p variant="danger" className="mt-3">{errorMessage}</p>}
                {dataLoaded && response ? (
                  <div className="response-container">
                    <Card.Text>
                      <p className="pre-wrap">{response}</p>
                    </Card.Text>
                    {response && <CopyToClipboard text={response} />}
                  </div>
                ) : null}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GeneratorComponent;