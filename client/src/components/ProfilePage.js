import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ProfilePage = props => {
  const isAuthenticated = useSelector(state => state.auth.logged_in);
  const user = useSelector(state => state.auth.user);
    return(
      <Container fluid style={{ backgroundColor: '#fbeec1' }}>
        <Row>
          <div className="profile-header">
            <div className="profile-header__item_username">
              User Profile - {user.email}
            </div>
            <div className="profile-header__item_credits">
              Remaning Credits: {user.credits}
            </div>
          </div>
          <div className="comic-page">
            <h2>My Comics:</h2>
            <List list={user.comicsofUser} component="comic"/>
          </div>
       </Row>
      </Container>
    )
};

export default ProfilePage;
