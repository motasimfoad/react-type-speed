import React, {useState, useEffect} from 'react';
import '../Score/score.css';

function Score(props) {

  const [currentScore, setCurrentScre] = useState(0);

    useEffect(() => {
      setCurrentScre(props.currentScore);
  })

    return (
        <div className="scoreContainer">
          <h5>
            Your Speed :
          </h5>
          <h1 className="wpmCounter">
          {currentScore} WPM
          </h1>
        <h3>
          Top Three***
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
