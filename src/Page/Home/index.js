import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import TextInput from '../../Components/TextInput';
import Score from '../../Components/Score';
import {randomText, scoreEngine} from '../../Constant';
import { useTimer } from 'use-timer';
import Background from '../../Assets/img/bg.png';
import ScoreCard from '../../Components/ScoreCard'
function App() {
 
  const { time, start, pause, reset, isRunning } = useTimer();
  const [modalShow, setModalShow] = React.useState(false);
  const [currentScore, setCurrentScore] = useState('0');
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
      setCurrentScore(() => scoreEngine());
  };

  const checker = (e) => {
      setText(() => currentText.replace(' ', ''));
      return (() => e.replace(' ', '').split('').filter((s,i) => s === text[i]).length)
    };

  const complete = (e) => {
    if (currentText.length === e.length) {
      pause();
      setModalShow(true);
     }
  };

  const scoreEngine = () => {
    if (charCount !== 0 && time !== 0) {
      const wpm = (charCount/5) / (time/60);
      return (
         Math.round(wpm)
      )
    }
    return 0;
}

  var sectionStyle = {
    backgroundImage: `url(${Background})`
 }

  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea currentText={currentText} userText={userText}/>
           <div>
          <input type="text" placeholder="Input here" onChange={onChange} readOnly={finished}/>
          </div>
          </Col>
           <Col xl={6}>
           <Score time={time} charCount={charCount}/>
          </Col>
          <ScoreCard
            show={modalShow}
            onHide={() => setModalShow(false)}
            currentScore={currentScore}
        />
        {currentScore}
       </Row>
   </Container>
  );
}

export default App;
