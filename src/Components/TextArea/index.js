import React, {useState, useEffect} from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../TextArea/textarea.css';

function TextArea(props) {
    const [currentText, setCurrentText] = useState(props.currentText);
    const [testText, setTestText] = useState(() => currentText.split(''));
    const [userText, setUserText] = useState(props.userText);
    
    useEffect(() => {
        setUserText(props.userText);
    })

  return (
             <div>
                 <h1>
                 Typing Speed Test
                 </h1>
                 <div>
                    {
                    testText.map((s,i) => {
                        let color;
                        if (i < userText.length){
                            color = s === userText[i] ? 'green' : 'red';
                        }
                        return <span key={i} style={{backgroundColor: color}}>{s}</span>
                    })
                    }
                 </div>
            </div>
  );
}

export default TextArea;
