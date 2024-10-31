import React from 'react';
import { Link } from 'react-router-dom';
import './LoginC.css'

function Button({ text }) {
  return (
    <Link className="login-button" to="/mainpage" >{text}</Link>
  );
}

export default Button;
