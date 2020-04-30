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
  const [userText, setUserText] = useState('');
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);

  const onChange = (e) => {
      setUserText(e.currentTarget.value);
      timer();
  };

  const timer = () => {
    if (!started) {
        setStarted(true);
        setInterval(() => {
            setTime(time => time + 1);  
            }, 1000);
      }
      console.log(time);
      
  };

  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea currentText={currentText} userText={userText}/>
           <div>
          <input text="yoyo" type="text" placeholder="Input here" onChange={onChange}/>
          </div>
          {time}
           </Col>
           <Col xl={6}>
           <Score currentScore={currentScore}/>
          </Col>
       </Row>
   </Container>
  );
}

export default App;
