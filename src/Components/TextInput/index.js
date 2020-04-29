import React, { useState } from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../TextInput/textinput.css';
import {resetPressed} from '../../Constant';



function TextInput() {
  const [userText, setUserText] = useState("Input here");
  if (resetPressed === true) {
    setUserText("Input here");
    // resetPressed = false;
  } 

return <div>
<input text="yoyo" type="text" placeholder={userText} onChange={e => setUserText(e.target.value)}/>
{userText}{resetPressed}
</div>
}

export default TextInput;
