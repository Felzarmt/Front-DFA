import React from 'react';
import './NavCon.css';
import { Link } from 'react-router-dom';

const PageTitle = ({ title }) => {
  return (
    <div className='pagetitle'>
      <Link to="/mainpage"> 
      <button className="back-button" >←</button>
      <h1 className="page-title">{title}</h1>
      </Link>
    </div>
)
};

export default PageTitle;
