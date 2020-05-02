import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../ScoreCard/scorecard.css';
import firebase from '../../Firebase/Config';

function ScoreCard(props) {
  
  const [userName, setUserName] = useState('')
  
  const resultGenerator = () =>{
    firebase.firestore().collection('TypeSpeed').add({
      name: userName,
      wpm: props.currentScore
    });
    props.onHide();
  };
   
  return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
        <Form.Group>
            <br />
            <h2 className="title">
                Submit Score : {props.currentScore}WPM?
            </h2>
            <br />
            <br />
        <Form.Control className="input" size="lg" type="text" placeholder="Your name?" onChange={(e) => setUserName(e.target.value)}/>
        <br />
        <br />
        <div style={{textAlign: 'right'}}>
        <Button className="btn1" onClick={props.onHide}>Cancel</Button>
        <Button className="btn2" onClick={resultGenerator}>Submit</Button>
        </div>
        
        </Form.Group>
        </Modal.Body>
      </Modal>
    );
  }

  export default ScoreCard;