import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-item" id="logo"><NavLink to="/" exact>Stuntin</NavLink></li>
        <li className="nav-item"><NavLink to="/posts/new">Create New Post</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
