import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CoverComponent from './CoverComponent';
import List from './List';
import { startSetComics } from '../actions/comics';
import { startSetPublishers } from '../actions/publishers';
import { startSetCharacters } from '../actions/characters';
import { useSelector, useDispatch } from 'react-redux';

const ComicsHomePage = () => {
    const dispatch = useDispatch();
    const comics = useSelector(state => state.comics.length > 3 ? state.comics.slice(0,3) : state.comics);
    const publishers = useSelector(state => state.publishers.length > 3 ? state.publishers.slice(0,3) : state.publishers);
    const characters = useSelector(state => state.characters.length > 3 ? state.characters.slice(0,3) : state.characters);

    useEffect(() => {
      dispatch(startSetComics())
      .then(() => {
        console.log("Comics fetched!");
        dispatch(startSetPublishers())
        .then(() => {
          console.log("Publisher fetched!");
          dispatch(startSetCharacters())
          .then(() => {
            console.log("Characters fetched!");
          });
        });
      });
    },[dispatch]);
    return(
      <>
      <CoverComponent></CoverComponent>
      <Container fluid>
        <h1>Latest Comics</h1>
          <List list={comics} component="comic" />
          <NavLink to="/comics">See all Comics</NavLink>
        <h1>Publishers</h1>
          <List list={publishers} component="publisher" />
          <NavLink to="/publishers">See all Publishers</NavLink>
        <h1>Characters</h1>
          <List list={characters} component="character" />
          <NavLink to="/characters">See all Characters</NavLink>
      </Container>
      </>
  );
};

export default ComicsHomePage;
