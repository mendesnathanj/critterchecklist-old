import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const pages = ['Bugs', 'Fish', 'Fossils', 'Music']
    .map(page => (
      <li key={page} className="navitem">
        <Link className="navlink" to={`/${page.toLowerCase()}`}>{page}</Link>
      </li>
    ));

  return (
    <nav className="navbar">
      <ul className="navlist">
        { pages }
      </ul>
    </nav>
  )
};


export default Navbar;
