import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ComicItem = ({ id, title, price, publisher, comic_cover_image }) => (
  <Card>
    <NavLink to={`/comics/${id}`}>
      <Card.Img variant="top" style={{ height: '500px' }}
        src={!!comic_cover_image.url ? comic_cover_image.url : process.env.PUBLIC_URL + '/image-not-found.png'}/>
    </NavLink>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Price: {price}</Card.Text>
    </Card.Body>
  </Card>
);

export default ComicItem;
