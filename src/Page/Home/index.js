import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import TextInput from '../../Components/TextInput';
import Score from '../../Components/Score';
import {randomText} from '../../Constant';
import { useTimer } from 'use-timer';



function App() {
 
  const { time, start, pause, reset, isRunning } = useTimer();
  
  const [currentScore, setCurrentScore] = useState(10);
  const [currentText, setCurrentText] = useState(randomText());
  const [userText, setUserText] = useState('');
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [charCount, setCharCount] = useState('');

  const onChange = (e) => {
     const a = e.currentTarget.value;
     start();
      setUserText(a);
      complete(a);
      setCharCount(checker(a));
     
  };

  const checker = (e) => {
      setText(() => currentText.replace(' ', ''));
      return (() => e.replace(' ', '').split('').filter((s,i) => s === text[i]).length)
    };

  const complete = (e) => {
    if (currentText.length === e.length) {
      pause();
     }
  };

  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea currentText={currentText} userText={userText}/>
           <div>
          <input type="text" placeholder="Input here" onChange={onChange} readOnly={finished}/>
          </div>
          {started}
          </Col>
           <Col xl={6}>
           <Score time={time} charCount={charCount}/>
          </Col>
       </Row>
   </Container>
  );
}

export default App;
