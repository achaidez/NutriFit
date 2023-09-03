import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

import MainExercise from "./exercise/mainExercise.jsx";
import MainNutrition from "./nutrition/mainNutrition.jsx";

const App = () => {
  const navigate = useNavigate();

  const logoClick = () => {

  }

  return (
    <div>
      <h1>LOGO</h1>
      Main App JSX
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/exercise" element={<MainExercise />} />
        <Route path="/nutrition" element={<MainNutrition />} />
      </Routes>
    </div>
  )
}

export default App;