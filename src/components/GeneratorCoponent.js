import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from './OpenAIAPI.js';

class GeneratorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: 'AI Generated Response:',
      response: this.props.generatorData.response1,
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prompt = `${this.props.generatorData.prompt}${formData.get(this.props.generatorData.formName)}`;

    const { response2 = '', response3 = '' } = this.props.generatorData;
    this.setState({
      heading: response2 + formData.get(this.props.generatorData.formName),
      response: '',
    });
    callAPI(prompt).then((data) => {
      this.setState({
        heading: response3 + formData.get(this.props.generatorData.formName),
        response: data,
      });
    });
  };

  render() {
    const { h1, description, formLabel, formName, placeholder } = this.props.generatorData;
    const { heading, response } = this.state;

    return (
      <div id="main-content">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h1>{h1}</h1>
              <p id="pageDescription">{description}</p>

              <Form onSubmit={this.onFormSubmit}>
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
  }
}

export default GeneratorComponent;

