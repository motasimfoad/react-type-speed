import React, {useState, useEffect} from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import '../Score/score.css';

function Score(props) {

   if (props.charCount !== 0 && props.time !== 0) {
      const wpm = (props.charCount/5) / (props.time/60);
      return (
          <div>
            <h5>
              Your Speed :
            </h5>
            <h1>
            {Math.round(wpm)} wpm
            </h1>
          <h3>
            Top Three**
          </h3>
          <h4>
            Ninja : 420 WPM
          </h4>
          <h4>
            Ninja : 420 WPM
          </h4>
          <h4>
            Ninja : 420 WPM
          </h4>
          </div>
      )
    }
    
    return (
        <div className="scoreContainer">
          <h5>
            Your Speed :
          </h5>
          <h1>
          0 WPM
          </h1>
        <h3>
          Top Three**
        </h3>
        <h6>
          Ninja : 420 WPM
        </h6>
        <h6>
          Ninja : 420 WPM
        </h6>
        <h6>
          Ninja : 420 WPM
        </h6>
        </div>
        );
}

export default Score;
