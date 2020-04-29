import React, {useState, useEffect} from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../Score/score.css';

function Score(props) {

    const [currentScore, setCurrentScore] = useState(props.currentScore);

  return (
  
       <Row>
          <Col>
          <Jumbotron>
           {currentScore}
          </Jumbotron>
        <Button>Next</Button>
        <Button onClick={() => setCurrentScore(0)}>Reset</Button>
          </Col> 
       </Row>
       
        
  
  );
}

export default Score;
