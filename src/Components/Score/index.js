import React, {useState, useEffect} from 'react';
import '../Score/score.css';

import {gql, useQuery} from '@apollo/client';
import { set } from 'react-ga';

const SCORE = gql`
query score {
  type_test(order_by: {score: desc}, limit: 3) {
    id
    name
    score
  }
}
`;

const TodoPrivateListQuery = () => {

  const { loading, error, data } = useQuery(SCORE);
  
  if (loading) {

    return <div>Loading...</div>;

  }

  if (error) {

    console.error(error);

    return <div>Error!</div>;

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
  
  // function useScore(){
  //   const { data } = useQuery(SCORE);
  //   if (data) {
  //     return data.type_test[2].id; 
  // }
  //   useEffect(() => {
  
     
  
  //   }, [])
  //  return score.type_test;
  // console.log(score.data)
  // }
    const [currentScore, setCurrentScore] = useState(0);
    // const  score  = useScore();
    // const [a, setA] = useState("");
    // const  {data}  = useQuery(SCORE);
    useEffect(() => {
      setCurrentScore(props.currentscore);
    }, [props.currentscore]);

    // setA(data)

    // console.log(a);


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
        <TodoPrivateListQuery />
        {/* {score.map((item) =>
                <h6 key={item.id}> 
                {item.name} : {item.score} WPM
                </h6>
              )} */}
        </div>
        );
}

export default Score;
