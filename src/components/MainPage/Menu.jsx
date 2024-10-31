import React from 'react'
import './MainPageC.css'
import { MenuItem } from './MenuItem';

export const Menu = () => {
    const menuItems = [
        'Derivado Lácteo Fermentado',
        'Producto UHT',
        'Materia Prima',
        'Aguas y Enjuagues',
        'Superficies y Equipos',
        'Ambientes',
        'Manipuladores',
        'Informes y Registros',
      ];
  return (
    <div className="menu">
    <h2 className="menu-title">Menú</h2>
    {menuItems.map((item,key) => (
      <MenuItem text={item} key={key} />
    ))}
  </div>
  )
}
