import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import TextInput from '../../Components/TextInput';
import Score from '../../Components/Score';
import {randomText} from '../../Constant';



function App() {
 
  
  
  const [currentScore, setCurrentScore] = useState(10);
  const [currentText, setCurrentText] = useState(randomText());
  const [userText, setUserText] = useState("Input here");

  const onChange = (e) => {
      setUserText(e.currentTarget.value);
  };

  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea currentText={currentText} userText={userText}/>
           <div>
          <input text="yoyo" type="text" placeholder={userText} onChange={onChange}/>
          </div>
           </Col>
           <Col xl={6}>
           <Score currentScore={currentScore}/>
          </Col>
       </Row>
   </Container>
  );
}

export default App;
