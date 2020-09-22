import React, {useState, useEffect} from 'react';
import '../Score/score.css';
import firebase from '../../Firebase/Config';
import {gql, useQuery} from '@apollo/client';

const SCORE = gql`
query score {
  type_test(order_by: {score: desc}) {
    id
    name
    score
  }
}
`;

function useScore(){
  const score = useQuery(SCORE);
  useEffect(() => {

    // firebase
    // .firestore()
    // .collection('TypeSpeed')
    // .orderBy('wpm', 'desc')
    // .onSnapshot((snapshot) =>{
    //   const newScore = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data()
    //   }))
    //   setScore(newScore);
    // })

  }, [])
 return score.data;
// console.log(score.data)
}

function Score(props) {
    const [currentScore, setCurrentScore] = useState(0);
    const score = useScore();
    console.log(score)
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
        {/* {score.map((item) =>
                <h6 key={item.id}> 
                {item.name} : {item.wpm} WPM
                </h6>
              )} */}
        </div>
        );
}

export default Score;
