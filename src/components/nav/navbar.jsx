import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const pages = ['Bugs', 'Fish', 'Fossils', 'Music']
    .map(page => (
      <li className="navitem">
        <Link className="navlink" to={`/${page.toLowerCase()}`}>{page}</Link>
      </li>
    ));

  return (
    <nav className="navbar">
      <ul className="navlist">
        <li className="navitem">
          <Link className="navlink" exact to='/'>Home</Link>
        </li>
        { pages }
      </ul>
    </nav>
  )
};


export default Navbar;
