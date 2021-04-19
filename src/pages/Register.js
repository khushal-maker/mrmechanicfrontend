import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap'
import './register.css'


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
           input:{},
           errors:{}
    }
    this.handleChange=this.handleChange.bind(this)
  }
    handleSubmit(event) {
    event.preventDefault(); 

    fetch('http://192.168.1.106:3000/ru/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        password: event.target.password.value,
        confirmpass: event.target.confirmpass.value
      })
    }) 
      .then(async (res) => {
        console.log("res ::", res);
        if (res.statusText === "OK") {
          await alert('Register successfully')
        }
        else {
          alert('Not Matched')
        }
      }).catch(err => {
        console.log("Error :: ", err);
        alert('Some Thing Went Wrong')
      })
  }
handleChange(event){
  let input=this.state.input;
  input[event.target.name]=event.target.value;

  this.setState({
    input
  });
}
  
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input['password']) {
      isValid = false;
      errors['password'] = 'Please enter your password';
    }
    if (!input['confirmpass']) {
      isValid = false;
      errors['confirmpass'] = 'please enter your Confirmpassword';
    }
    if (typeof input['password'] !== 'undefined' && typeof ['confirmpass'] !== 'undefined') {
      if (input['password'] != input['confirmpass']) {
        isValid = false;
        errors['password'] = 'Password does not match'; 
      }
    }
    this.state({
      errors: errors
    });
    return isValid;
  }

  render(){
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter-register"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Register
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <Row>
                <Col sm={10}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="FirstName">
                      <Form.Label>FirstName</Form.Label>
                      <Form.Control
                        className="from-input-box"
                        type="text"
                        name="firstname"
                        required
                        placeholder="Firstname"
                      />
                    </Form.Group>
                    <Form.Group controlId="LastName">
                      <Form.Label>LastName</Form.Label>
                      <Form.Control
                        className="from-input-box"
                        type="text"
                        name="lastname"
                        required
                        placeholder="LastName"
                      />
                    </Form.Group>
                    <Form.Group controlId="Email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        className="from-input-box"
                        type="text"
                        name="email"
                        required
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group controlId="Password">
                      <Form.Label>Password  </Form.Label>
                      <Form.Control
                        className="from-input-box"
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.input.password}
                      />
                    </Form.Group>
                    <Form.Group controlId="ConfirmPassword">
                      <Form.Label>ConfirmPassword</Form.Label>
                      <Form.Control
                        className="from-input-box"
                        type="password"
                        name="confirmpass"
                        required
                        placeholder="ConfirmPassword"
                        onChange={this.handleChange}
                        value={this.state.input.confirmpass}
                      />
                      <div className='text-danger'>
                        {this.state.errors.confirmpass}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Button variant="primary" type="submit" className="register-btn">Register</Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}
export default Register;
