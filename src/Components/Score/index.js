import React from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../Score/score.css'

function Score() {
  return (
  
       <Row>
          <Col>
          <Jumbotron>
            SCORE!!
        </Jumbotron>
        <Button>Next</Button>
          </Col> 
       </Row>
       
        
  
  );
}

export default Score;
