import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../ScoreCard/scorecard.css';
import {useMutation, gql} from '@apollo/client';

const FINAL_MUTATION = gql`
  mutation MyMutation($name: String, $score: String) {
    insert_type_test(objects: {name: $name, score: $score}) {
      returning {
        id
      }
    }
  }
`;

function ScoreCard(props) {
  
  const [userName, setUserName] = useState('');
  const [first_add] = useMutation(FINAL_MUTATION);
  const score = parseInt(props.currentscore);
  
  const resultGenerator = () =>{
    first_add({
      variables: {
        name: `${userName}`,
        score: `${score}`,
      }
    }).then( a => {
      props.onHide();
    })
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
                Submit Score : {props.currentscore}WPM?
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