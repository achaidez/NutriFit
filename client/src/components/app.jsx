import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import MainExercise from "./exercise/mainExercise.jsx";
import MainNutrition from "./nutrition/mainNutrition.jsx";
import Login from "./login/login.jsx";
import Dashboard from "./dashboard.jsx";
import Home from "./home.jsx";

const App = () => {
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState();

  useEffect(() => {
    //check to see if signed in to either render the login page or redirect to homepage
      //could check to see if the browser contains an access token
    axios.get('/cookies/getCookies', {
      // query: {
      //   email: e.target.form[0].value,
      //   password: e.target.form[1].value
      // }
    })
    .then(data => {
      //console.log('cookies success', data.data.refreshtoken);
      if (data.data.refreshtoken === undefined) {
        console.log("NO REFRESH TOKEN");
      } else {
        setRefresh(data.data.refreshtoken);
      }
      navigate();
    })
    .catch(err => {
      console.log('get cookies use effect err', err);
    })
  }, [])

  const logoClick = () => {
    //write function to redirec t to home page
  };

  const logoutClick = () => {
    axios.post('/auth/logout', (req, res) => {
      console.log('logout post req')
    })
    .then(data => {
      console.log(data);
      navigate('/login')
    })
    .catch(err => {
      console.log('logout err', err);
    })
  }

  if (refresh !== undefined) {
    return (
      <div>
        <h1>LOGO</h1>
        <button onClick={logoutClick}>Log Out</button>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="exercise" element={<MainExercise />} />
            <Route path="nutrition" element={<MainNutrition />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    )
  } else {
    return (
      <div>
        <h1>LOGO</h1>
        <Login />
      </div>
    )
  }
}

export default App;