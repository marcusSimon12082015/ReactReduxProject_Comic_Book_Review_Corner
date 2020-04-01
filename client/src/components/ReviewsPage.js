import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';
import Container from 'react-bootstrap/Container';
import { startSetReviews } from '../actions/reviews';

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews);

  useEffect(() => {
    dispatch(startSetReviews())
    .then(() => {
      console.log("Reviews Fetched!");
    })
  },[dispatch]);
  return(
    <Container fluid>
      <h1>Reviews Page</h1>
      <div className="review-page">
        <List list={reviews} component="review"/>
      </div>
     </Container>
);
}

export default ReviewsPage;
