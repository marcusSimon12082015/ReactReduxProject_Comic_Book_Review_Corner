import React from 'react';
import { NavLink } from 'react-router-dom';

const CoverComponent = () => (
    <div className="header-cover">
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary_main">Join Our Community</span>
        <span className="heading-primary_sub">Get free 200 credits on Sign Up</span>
      </h1>
      <NavLink to="/reviews" className="btn-white">
        See our user reviews
      </NavLink>
    </div>
  </div>
);

export default CoverComponent;
