import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewItem = ({ title, comic, user}) => (
    <Card style={{ margin:'10px' }}>
        <Card.Img variant="top" style={{ height: '500px' }}
          src={!!comic.comic_cover_image.url ? comic.comic_cover_image.url : process.env.PUBLIC_URL + '/image-not-found.png'}/>
      <Card.Body>
        <Card.Title>Review For - {comic.title}</Card.Title>
        <Card.Text>{title} by {user.email}</Card.Text>
      </Card.Body>
    </Card>
);

export default ReviewItem;
