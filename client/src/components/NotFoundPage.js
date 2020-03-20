import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return(
    <div>
      <h1>Page not Found</h1>
      <Link to="/">Go Home</Link>
    </div>

  )
}

export default NotFoundPage;
