import React from 'react';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const handleSubmit = (e) => {
    //submit sign in to auth route
    console.log(e.target.form[0].value)
  };

  return (
    <div>
      Login
      <div>
        <form>
          <input placeHolder='Email'></input>
          <input placeHolder='Password'></input>
          <button type="button" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login;