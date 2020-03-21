import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReviewItem from './ReviewItem';

const ReviewsList = ({ reviews }) => {
  return(
    <Row>
      {reviews.map((review) => {
        return <Col sm={4} key={review.id}>
          <ReviewItem
            key={review.id}
            {...review}/></Col>
          })}
    </Row>
  );
};

export default ReviewsList;
