import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ComicsList from './ComicsList';
import { startSetComics } from '../actions/comics';
import { startSetPublishers } from '../actions/publishers';
import PublishersList from './PublishersList';
import { useSelector, useDispatch } from 'react-redux';

const ComicsHomePage = () => {
    const dispatch = useDispatch();
    const comics = useSelector(state => state.comics.length > 3 ? state.comics.slice(0,3) : state.comics);
    const publishers = useSelector(state => state.publishers.length > 3 ? state.publishers.slice(0,3) : state.publishers);

    useEffect(() => {
      dispatch(startSetComics())
      .then(() => {
        console.log("Comics fetched!");
      });
      dispatch(startSetPublishers())
      .then(() => {
        console.log("Publisher fetched!");
      });
    },[dispatch]);
    return(
      <>
      <Container fluid>
        <h1>Latest Comics</h1>
        <ComicsList comics={comics}/>
        <NavLink to="/comics">See all Comics</NavLink>
        <h1>Publishers</h1>
        <PublishersList publishers={publishers}/>
        <NavLink to="/publishers">See all Publishers</NavLink>
        <h1>Characters</h1>
      </Container>
      </>
  );
};

export default ComicsHomePage;
