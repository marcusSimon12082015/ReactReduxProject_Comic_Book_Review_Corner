import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = props => {
  return(
    <header className="header">
      <span><NavLink to="/">ComicBook Review</NavLink></span>
      <nav className="navigation">
      <ul>
        <li>
          <Button variant="top" size="lg">Login</Button>
        </li>
        <li>
        <NavLink to="/signup">
            <Button variant="danger" size="lg">Sign up</Button>
        </NavLink>
        </li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
