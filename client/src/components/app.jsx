import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

import MainExercise from "./exercise/mainExercise.jsx";
import MainNutrition from "./nutrition/mainNutrition.jsx";

const App = () => {
  return (
    <div>
      Main App JSX
      <MainExercise />
      <MainNutrition />
    </div>
  )
}

export default App;