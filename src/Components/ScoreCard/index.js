import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../ScoreCard/scorecard.css';

function ScoreCard(props) {
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
        <Form.Control className="input" size="lg" type="text" placeholder="Your name?" />
        <br />
        <br />
        <div style={{textAlign: 'right'}}>
        <Button className="btn1" onClick={props.onHide}>Cancel</Button>
        <Button className="btn2" onClick={props.onHide}>Submit</Button>
        </div>
        
        </Form.Group>
        </Modal.Body>
      </Modal>
    );
  }

  export default ScoreCard;