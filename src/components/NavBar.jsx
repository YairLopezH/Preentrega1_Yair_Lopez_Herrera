import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">CoderGames</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#promociones">Promociones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nuevoslanzamientos">Nuevos lanzamientos</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
