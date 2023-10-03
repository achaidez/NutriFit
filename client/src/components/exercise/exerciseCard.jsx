import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseCard = (props) => {
  return (
    <div>
      <p>{props.entry.name}</p>
    </div>
  )
};

export default ExerciseCard;