import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import ExerciseCard from './exerciseCard.jsx';

const ExerciseList = (props) => {
  return (
    <div>
      {props.list.map(entry => {
        return (
          <div key={entry.exercise_id}>
            <ExerciseCard entry={entry} />
          </div>
        )
      })}
    </div>
  )
};

export default ExerciseList;