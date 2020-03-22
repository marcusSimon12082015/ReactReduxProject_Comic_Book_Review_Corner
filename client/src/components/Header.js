import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LoginModal } from './LoginModal';


const Header = props => {
  const [modalOpen,setModalState] = useState(false)

  const handleModalOpen = () => {
    setModalState(true)
  }

  const handleModalClose = () => {
    setModalState(false)
  }
  
  return(
    <header className="header">
      <span><NavLink to="/">ComicBook Review</NavLink></span>
      <nav className="navigation">
      <ul>
        <li onClick={handleModalOpen}>
          <Button variant="top" size="lg">Login</Button>
        </li>
        <li>
        <NavLink to="/signup">
            <Button variant="danger" size="lg">Sign up</Button>
        </NavLink>
        </li>
      </ul>
      </nav>
      <LoginModal modalOpen={modalOpen} handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}/>
    </header>
  );
};

export default Header;
