import React,{ useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startAddComicToUser } from '../actions/auth';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FlashMessage from './FlashMessage';


const ComicShowPage = props => {
  const dispatch = useDispatch();
  const comicId = parseInt(props.match.params.comicId);
  const comic = useSelector(state => state.comics.find((comic) => comic.id === comicId));
  const messages = useSelector(state => Object.values(state.auth.messages).some(key => key !== ""));
  const isAuthenticated = useSelector(state => state.auth.logged_in);
  const alreadyOwned = useSelector(state => state.auth.user.comicsofUser && state.auth.user.comicsofUser.some((comicUser) => comicUser.id === comicId));

  return(
    <Container fluid>
    {messages && <FlashMessage />}
    {comic === undefined ? (
      <Row>
        <Col>
          <div className="comic-show-container">
            <h1>Comic Not Found</h1>
          </div>
        </Col>
      </Row>
      ):(
        <></>
      )
    }
    </Container>
  );
}

export default ComicShowPage;
