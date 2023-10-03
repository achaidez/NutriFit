import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //submit sign in to auth route
    console.log(e.target.form[0].value, e.target.form[1].value)
    axios.post('/auth/signin', {
      query: {
        email: e.target.form[0].value,
        password: e.target.form[1].value
      }
    })
    .then(() => {
      console.log('login success');
      navigate("/");
    })
    .catch(err => {
      console.log('handle login submit err', err);
    })
  };

  return (
    <div>
      <div>
      <h3>Please Login</h3>
        <form>
          <input placeholder='Email'></input>
          <input placeholder='Password'></input>
          <button type="button" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login;