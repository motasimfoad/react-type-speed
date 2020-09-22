import React, {useState, useEffect} from 'react';
import '../TextArea/textarea.css';

function TextArea(props) {
    const [currentText] = useState(props.currentText);
    const [testText] = useState(() => currentText.split(''));
    const [userText, setUserText] = useState(props.userText);
    const [a, setA] = useState('');
    
    useEffect(() => {
        setUserText(props.userText);
    }, [props.userText])



  return (
             <div>
                 <br />
                 <h1 className="title">
                 Typing Speed Test
                 </h1>
                 <div className="textArea">
                    {
                    testText.map((s,i) => {
                        let color;
                        if (i < userText.length){
                            color = s === userText[i] ? '#a2ded0' : '#f1a9a0';
                        }
                        return <span key={i} style={{backgroundColor: color}}>{s}</span>
                    })
                    }
                 </div>
            </div>
  );
}

export default TextArea;
