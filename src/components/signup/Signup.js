import React, { Component, Fragment } from "react";
import './Signup.css'
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
  Form
} from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div class = "signup">
          <h3>SIGNUP</h3>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="QweQw!123" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="QweQw!123" />
          </Form.Group>
        </Form>
        </div>
      </Fragment>
    );
  }
}

export default Signup;
