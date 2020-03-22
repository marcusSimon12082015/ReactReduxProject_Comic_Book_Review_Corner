import React from 'react';
import { useSelector } from 'react-redux';
import ComicsList from './ComicsList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ProfilePage = props => {
  const isAuthenticated = useSelector(state => state.auth.logged_in);
  const user = useSelector(state => state.auth.user);
    return(
      <Container fluid style={{ backgroundColor: '#fbeec1' }}>

      </Container>
    )
};

export default ProfilePage;
