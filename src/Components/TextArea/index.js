import React from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../TextArea/textarea.css';

function TextArea() {
  return (
  
       <Row>
           <Col xl={12}>
           <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
                </Jumbotron>
           </Col>
       </Row>
  
  );
}

export default TextArea;
