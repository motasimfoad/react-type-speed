import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import Score from '../../Components/Score';
import ScoreCard from '../../Components/ScoreCard';
import {randomText} from '../../Constant';
import { useTimer } from 'use-timer';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import Sound from '../../Assets/audio/key.mp3';

let audio = new Audio(Sound);

// Motasim Foads google analytics, replace with your if you want
ReactGa.initialize("UA-154721739-1");
ReactGa.pageview('Typing Spped App Screen');
// Motasim Foads google analytics, replace with your if you want

function App() {

  const { time, start, pause } = useTimer();
  const [modalShow, setModalShow] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentText] = useState(randomText());
  const [userText, setUserText] = useState('');
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState('');

  const onChange = (e) => {
     const a = e.currentTarget.value;
      audio.play();
      audio.playbackRate = 1.1;
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

  const next = () => {
    window.location.reload(false);
  }

  return (
   <Container className="main" fluid>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Online typing speed test built using ReactJS</title>
                <link rel="canonical" href="http://typespeed.motasimfoad.com/"/>
                <meta name="description" content="Test your typing speed online for free. Easy and simple to use." />
     </Helmet>
       <Row>
           <Col xl={7} style={{marginTop:'10%'}}>
            < br />
            <TextArea currentText={currentText} userText={userText}/>
            < br />
            <div>
              <textarea cols="40" rows="10" className="userInput" type="text" placeholder="Start typing here ..." onChange={onChange} autoComplete="false" onPaste={()=> {return false}} />
            </div>
            < br />
            <Button variant="dark" size="lg" className="nextBtn" onClick={next}>Next</Button>
            < br />< br />< br />< br />
            <a href="https://motasimfoad.com" target="_blank" rel="noopener noreferrer">
            (c)Motasim Foad
            </a>
          </Col>
          <Col xl={5}>
           <Score currentscore={currentScore}/>
          </Col>
          <ScoreCard
            show={modalShow}
            onHide={() => setModalShow(false)}
            currentscore={currentScore}
        />
       </Row>
   </Container>
  );
}

export default App;
