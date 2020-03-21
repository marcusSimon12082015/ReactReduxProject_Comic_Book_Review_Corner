import React, {useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ComicsList from './ComicsList';
import { startSetComics } from '../actions/comics';
import { useSelector, useDispatch } from 'react-redux';

const ComicsHomePage = () => {
  const dispatch = useDispatch();
  const comics = useSelector(state => state.comics.length > 3 ? state.comics.slice(0,3) : state.comics);

  useEffect(() => {
     dispatch(startSetComics())
     .then(() => {
       console.log("Comics fetched!");
     });
   },[dispatch]);
  return(
    <>
      <Container fluid>
      <h1>Latest Comics</h1>
      <ComicsList comics={comics} />
      <NavLink to="/comics">See all Comics</NavLink>
      <h1>Publishers</h1>
      <h1>Characters</h1>
      </Container>
    </>
  )
}

export default ComicsHomePage;
