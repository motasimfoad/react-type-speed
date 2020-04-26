import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../Home/home.css';
import TextArea from '../../Components/TextArea';
import TextInput from '../../Components/TextInput';
import Score from '../../Components/Score'

function App() {
  return (
   <Container className="main" fluid>
       <Row>
           <Col xl={6}>
           <TextArea />
           <TextInput />
           </Col>
           <Col xl={6}>
           <Score />
           <Button>Reset</Button>
           </Col>
           
       </Row>
   </Container>
  );
}

export default App;
