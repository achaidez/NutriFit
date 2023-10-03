import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseList from './exerciseList.jsx';

const MainExercise = (props) => {
  const [exList, setExList] = useState([]);

  const partClick = (e) => {
    const part = e.target.innerText;
    axios.get('/exercises/' + part, (req, res) => {})
    .then(data => {
      setExList([data.data[0]])
    })
  };

  return (
    <div>
      Main Exercise JSX
      <div>
        <button onClick={e => {partClick(e)}}>Chest</button>
        <button onClick={e => {partClick(e)}}>Back</button>
      </div>
      <div>
        <ExerciseList list={exList} />
      </div>
      <div>
        Exercise Log
      </div>
    </div>
  )
};

export default MainExercise;