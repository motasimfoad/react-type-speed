import React, {useState, useEffect} from 'react';
import '../Score/score.css';
import {gql, useQuery} from '@apollo/client';

const SCORE = gql`
query score {
  type_test(order_by: {score: desc}, limit: 3) {
    id
    name
    score
  }
}
`;

const TopScore = () => {
  const { loading, data } = useQuery(SCORE);
  if (loading) {
      return <div>Loading...</div>;
  }

  return <div>
    {data.type_test.map((item) =>
                <h6 key={item.id}> 
                {item.name} : {item.score} WPM
                </h6>
              )}
  </div>;
};

function Score(props) {
    const [currentScore, setCurrentScore] = useState(0);
    
    useEffect(() => {
      setCurrentScore(props.currentscore);
    }, [props.currentscore]);

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
          <TopScore />
        </div>
      );
}

export default Score;
