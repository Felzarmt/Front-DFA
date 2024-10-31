import React from 'react'
import '../../components/MainPage/MainPageC.css'
import { Menu } from '../../components/MainPage/Menu'
import { FooterInfo } from '../../components/MainPage/FooterInfo'

export const MainP = () => {
  return (
    <div className="mainP-container">
      <Menu />
      <FooterInfo />
    </div>
  )
}
