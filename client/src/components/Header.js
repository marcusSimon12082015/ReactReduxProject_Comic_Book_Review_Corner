import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = props => {
  return(
    <header className="header">
      <span><NavLink to="/">ComicBook Review</NavLink></span>
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
    </header>
  );
};

export default Header;
