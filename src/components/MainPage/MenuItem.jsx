import React from 'react'
import './MainPageC.css'
import { Link } from 'react-router-dom'

export const MenuItem = ({ text }) => {
  return (
    <Link className="menu-item" to="/derlacfer">
      <span className="menu-item-text">{text}</span>
      <span className="menu-item-arrow">→</span>
    </Link>
  )
}
