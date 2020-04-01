import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const ComicItem = ({ id, title, price, publisher, comic_cover_image }) => (
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

export const PublisherItem = ({ name }) => (
  <Card>
    <Card.Img variant="top" style={{ height: '500px' }}
      src={process.env.PUBLIC_URL + '/image-not-found.png'}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export const ReviewItem = ({ title, comic, user}) => (
    <Card style={{ margin:'10px' }}>
        <Card.Img variant="top" style={{ height: '500px' }}
          src={!!comic.comic_cover_image.url ? comic.comic_cover_image.url : process.env.PUBLIC_URL + '/image-not-found.png'}/>
      <Card.Body>
        <Card.Title>Review For - {comic.title}</Card.Title>
        <Card.Text>{title} by {user.email}</Card.Text>
      </Card.Body>
    </Card>
);

export const CharacterItem = ({ name }) => (
  <Card>
    <Card.Img variant="top" style={{ height: '500px' }}
      src={process.env.PUBLIC_URL + '/image-not-found.png'}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export const BasicItem = () => (
  <>
    <h1>There was a problem!</h1>
  </>
);
