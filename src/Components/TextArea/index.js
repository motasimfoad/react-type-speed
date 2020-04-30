import React, {useState, useEffect} from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../TextArea/textarea.css';

function TextArea(props) {
    const [currentText, setCurrentText] = useState(props.currentText);
    const [userText, setUserText] = useState(props.userText);
    
    useEffect(() => {
        setUserText(props.userText);
    })

    



  return (
  
       <Row>
           <Col xl={12}>
           <Jumbotron>
                {currentText} <br />
                {userText}
           </Jumbotron>
           </Col>
       </Row>
  
  );
}

export default TextArea;
