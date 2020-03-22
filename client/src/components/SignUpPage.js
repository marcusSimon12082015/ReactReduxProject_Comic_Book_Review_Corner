import React from 'react';
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

export default SignUpPage;
