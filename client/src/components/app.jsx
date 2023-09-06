import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

import MainExercise from "./exercise/mainExercise.jsx";
import MainNutrition from "./nutrition/mainNutrition.jsx";
import Login from "./login/login.jsx";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //check to see if signed in to either render the login page or redirect to homepage
  }, [])

  const logoClick = () => {
    //write function to redirec t to home page
  }

  return (
    <div>
      <h1>LOGO</h1>
      Main App JSX
      <Login />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/exercise" element={<MainExercise />} />
        <Route path="/nutrition" element={<MainNutrition />} />
      </Routes>
    </div>
  )
}

export default App;