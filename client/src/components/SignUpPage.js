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
  handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = this.validateOnFormSubmit();
    if (isValid) {
      //validation passes send to server
      console.log(this.state);
      this.props.startRegistration({
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      }).then(() => {
        if (!!this.props.registrationError) {
          this.setState(() => ({registrationError:  this.props.registrationError}))
        }else{
          this.props.history.push("/");
        }
      })
    }
  }
  validateOnFormSubmit = () => {
    if (!this.state.email || !this.state.password || !this.state.password_confirmation) {
      this.setState(() => ({registrationError: 'Please provide email and password.'}))
      return false;
    }else if(this.state.email && !validator.isEmail(this.state.email)){
      this.setState(() => ({registrationError: 'Email format is invalid!'}))
      return false;
    }else if(this.state.password !== this.state.password_confirmation){
      this.setState(() => ({registrationError: 'Passwords must match!'}))
      return false;
    }else if(this.state.password.length < 8){
      this.setState(() => ({registrationError: 'Password at least 8 characters long!'}))
      return false;
    }
    if (this.state.error !== undefined) {
      this.setState(() => ({ registrationError: '' }))
    }
    return true;
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return(
      <div className="container_form">
        <div className="box">
        <h1>Registration Form!</h1>
        <Form onSubmit={this.handleFormSubmit}>
          {this.state.registrationError && <p className="error_class">{this.state.registrationError}</p>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"
              onChange={this.onChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"
              onChange={this.onChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control type="password" placeholder="Password confirmation" name="password_confirmation"
              onChange={this.onChange} />
          </Form.Group>
          <Button variant="success" type="submit" size="large" block>
            Sign Up
          </Button>
        </Form>
        </div>
        <NavLink to="/">Back To HomePage</NavLink>
      </div>
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
