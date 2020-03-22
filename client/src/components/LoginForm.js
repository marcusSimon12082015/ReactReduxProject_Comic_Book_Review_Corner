import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends React.Component {
  state = {
      email:"",
      password:"",
      loginError:""
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
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
