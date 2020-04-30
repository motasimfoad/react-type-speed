import React, {useState, useEffect} from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../TextArea/textarea.css';

function TextArea(props) {
    const [currentText, setCurrentText] = useState(props.currentText);
    const [testText, setTestText] = useState(currentText.split());
    const [userText, setUserText] = useState(props.userText);
    
    useEffect(() => {
        setUserText(props.userText);
    })

  return (
  
       <Row>
           <Col xl={12}>
           <Jumbotron>
               {
                   testText.map((s,i) => {
                       let color;
                       if (i < userText.length){
                        color = s === userText[i] ? 'red' : 'green';
                        console.log(userText.length);
                        
                       }
                       return <span key={i} style={{backgroundColor: color}}>{s}<br /></span>
                   })
               }
                {currentText} <br />
                {userText}
           </Jumbotron>
           </Col>
       </Row>
  
  );
}

export default TextArea;
