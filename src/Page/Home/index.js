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
  // const [time, setTime] = useState(0);
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [charCount, setCharCount] = useState('');

  const onChange = (e) => {
     const a = e.currentTarget.value;
     start();
      setUserText(a);
      complete(a);
      // timer();
      setCharCount(checker(a));
     
  };

  const timer = () => {
    // if (!started) {
    //     setStarted(true);
    //     setInterval(() => {
    //         setTime(time => time + 1);  
    //         }, 1000);
    //   }
    // let interval = null;
    //     if (!started) {
    //       interval = setInterval(() => {
    //         setTime(time => time + 1);  
    //       }, 1000);
    //     } else if (!finished && time !== 0) {
    //       clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
      
  };

  const checker = (e) => {
    setText(() => currentText.replace(' ', ''));
    return (() => e.replace(' ', '').split('').filter((s,i) => s === text[i]).length)
  };

  const complete = (e) => {
    if (currentText.length === e.length) {
      // clearInterval(timer);
      // setStarted(false);
      setFinished(true);
      pause();
      console.log("compleated");
      
    }
  };

  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea currentText={currentText} userText={userText}/>
           <div>
          <input text="yoyo" type="text" placeholder="Input here" onChange={onChange} readOnly={finished}/>
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
