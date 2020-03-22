import React,{ useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startAddComicToUser } from '../actions/auth';
import { deleteFlashMessages } from '../actions/auth';
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

  function allTogether(comicId){
    dispatch(startAddComicToUser(comicId))
    .then(() => {
      setTimeout(() =>{
        dispatch(deleteFlashMessages());
      },5000)
    });
  }

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
      <Row>
        <div className="comic-show-container">
        <Col lg="8">
            <div className="comic-show-container__general-information">
              <h1>{comic.title}</h1>
              <p>Description:</p>
              <div className="comic-show-container__description">
                {comic.description}
              </div>
              <p>Pages: {comic.pages} - Price: {comic.price}</p>
              {(isAuthenticated && !alreadyOwned) &&
                <button onClick={() => allTogether(comic.id)}>
                Add to Collection
              </button>
            }
            </div>
        </Col>
        <Col md="4">
          <div className="comic-show-container__image">
            <Image style={{ height: '500px' }}
              src={!!comic.comic_cover_image.url ? comic.comic_cover_image.url : process.env.PUBLIC_URL + '/image-not-found.png'}></Image>
          </div>
        </Col>
        </div>
      </Row>
      )
    }
    </Container>
  );
}

export default ComicShowPage;
