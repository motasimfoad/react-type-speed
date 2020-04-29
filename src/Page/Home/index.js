import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import TextInput from '../../Components/TextInput';
import Score from '../../Components/Score';



function App() {
  const [currentScore, setCurrentScore] = useState(10);
  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea />
           <TextInput />
           </Col>
           <Col xl={6}>
           <Score currentScore={currentScore}/>
          </Col>
       </Row>
   </Container>
  );
}

export default App;
