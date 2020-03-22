import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { cleanLoginMessages } from '../actions/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';

class LoginForm extends React.Component {
  state = {
      email:"",
      password:"",
      loginError:""
  }
  componentWillUnmount(){
    this.props.cleanLoginMessages()
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }
  validateOnFormSubmit = () => {
    if (!this.state.email || !this.state.password) {
      this.setState(() => ({loginError: 'Please provide email and password.'}))
      return false;
    }else if(this.state.email && !validator.isEmail(this.state.email)){
      this.setState(() => ({loginError: 'Email format is invalid!'}))
      return false;
    }
    if (this.state.error !== undefined) {
      this.setState(() => ({ loginError: '' }))
    }
    return true;
  }

onChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })
}
  render() {
  return(
    <Form onSubmit={this.handleFormSubmit}>
      {this.state.loginError && <p className="error_class">{this.state.loginError}</p>}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange} />
      </Form.Group>
      <Button variant="danger" type="submit" size="large" block>
        Login
      </Button>
    </Form>
    );
  };
};
const mapDispatchToProps = dispatch => ({
  startLogin: user => dispatch(startLogin(user)),
  cleanLoginMessages: () => dispatch(cleanLoginMessages())
});

const mapStateToProps = state => ({
  respondError: state.auth.messages.loginError
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
