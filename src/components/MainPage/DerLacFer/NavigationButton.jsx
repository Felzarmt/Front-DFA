import React from 'react';
import './NavCon.css';
import { Link } from 'react-router-dom';

const NavigationButton = ({ label }) => {
  return (
    <Link className="navigation-button" to="/pp">
      <span className='navigation-button-text'>{label}</span>
      <span className='navigation-button-arrow'>→</span>
    </Link>
  );
};

export default NavigationButton;
