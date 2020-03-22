import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import { connect } from 'react-redux';
import { startRegistration } from '../actions/auth';
import { cleanRegistrationMessages } from '../actions/auth';

class SignUpPage extends React.Component {
  state = {
    email:"",
    password:"",
    password_confirmation:"",
    registrationError:""
  }
  componentWillUnmount(){
    this.props.cleanRegistrationMessages();
  }

  render(){
    return(
      <div></div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startRegistration: user => dispatch(startRegistration(user)),
  cleanRegistrationMessages: () => dispatch(cleanRegistrationMessages())
});

const mapStateToProps = state => ({
  registrationError: state.auth.messages.registrationError
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);
