import React, {useState, useEffect} from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../Score/score.css';

function Score(props) {

    const [currentScore, setCurrentScore] = useState(props.currentScore);

    if (props.charCount !== 0 && props.time !== 0) {
      const wpm = (props.charCount/5) / (props.time/60);
      return (
        <Row>
          <Col>
          <Jumbotron>
          {Math.round(wpm)} wpm
          </Jumbotron>
          </Col> 
       </Row>
      )
    }
    
    return '0 WPM';

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
