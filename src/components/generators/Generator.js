import React, { useReducer } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from '../api/OpenAIAPI.js';

import CopyToClipboard from '../common/CopyToClipboard.js';
import LoadingSpinner from '../common/LoadingSpinner.js';
import useTypingEffect from '../../hooks/useTypingEffect.js';


const initialState = {
  heading: 'AI Generated Response:',
  response: '',
  errorMessage: '',
  dataLoaded: false,
  isFormSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_HEADING':
      return { ...state, heading: action.payload };
    case 'SET_RESPONSE':
      return { ...state, response: action.payload };
    case 'SET_ERROR_MESSAGE':
      return { ...state, errorMessage: action.payload };
    case 'SET_DATA_LOADED':
      return { ...state, dataLoaded: action.payload };
    case 'SET_IS_FORM_SUBMITTED':
      return { ...state, isFormSubmitted: action.payload };
    default:
      return state;
  }
}

const GeneratorComponent = ({generatorData}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const typingSpeed = 50;
  const responseWithTypingEffect = useTypingEffect(state.response, typingSpeed);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const prompt = `${generatorData.prompt}${formData.get(generatorData.formName)}`;

    dispatch({ type: 'SET_HEADING', payload: `Thinking about your ${generatorData.title} now...` });
    dispatch({ type: 'SET_RESPONSE', payload: '' });
    dispatch({ type: 'SET_ERROR_MESSAGE', payload: '' });
    dispatch({ type: 'SET_IS_FORM_SUBMITTED', payload: true });
    dispatch({ type: 'SET_DATA_LOADED', payload: false });
    callAPI(prompt).then((data) => {
      if (data.error) {
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: data.message });
      } else {
        dispatch({ type: 'SET_HEADING', payload: `Your AI Generated ${generatorData.title}:` });
        dispatch({ type: 'SET_RESPONSE', payload: data });
      }
      dispatch({ type: 'SET_DATA_LOADED', payload: true });
    });
  };

  const { title, description2, formLabel, formName, placeholder } = generatorData;

  return (
    <div id="main">
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
                <h2>{state.heading}</h2>
              </Card.Header>
              <Card.Body>
                {
                  state.errorMessage ?
                    (
                      <p variant="danger" className="mt-3">{state.errorMessage}</p>
                    )
                    : state.dataLoaded && state.response ?
                      (
                        <div className="response-container">
                          <Card.Text>
                            <p className="pre-wrap">{responseWithTypingEffect}</p>
                          </Card.Text>
                          {state.response && <CopyToClipboard text={state.response} />}
                        </div>
                      )
                      : !state.isFormSubmitted ?
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