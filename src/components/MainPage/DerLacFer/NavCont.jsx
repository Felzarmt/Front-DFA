import React from 'react';
import PageTitle from './PageTitle';
import NavigationButton from './NavigationButton';
import './NavCon.css';

const NavCont = () => {
  return (
    <div className="app-container">
      <PageTitle title="Derivado Lácteo Fermentado" />
      <NavigationButton label="Producto en Proceso" />
      <NavigationButton label="Producto Terminado" />
      <NavigationButton label="Resultados Producto Proceso" />
      <NavigationButton label="Resultados Producto Terminado" />
    </div>
  );
};

export default NavCont;