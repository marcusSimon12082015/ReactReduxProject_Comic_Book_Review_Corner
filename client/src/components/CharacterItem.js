import React from 'react';
import Card from 'react-bootstrap/Card';

const CharacterItem = ({ name }) => (
  <Card>
    <Card.Img variant="top" style={{ height: '500px' }}
      src={process.env.PUBLIC_URL + '/image-not-found.png'}/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
  </Card>
);

export default CharacterItem;
