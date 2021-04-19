import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap'
//import './register.css'

class Forgot extends Component {
    constructor(props){
        super(props);
        this.state={
            // input:{},
            // errors:{}

        }
    }
    handleSubmit(event){
        event.PreventDefault();

        fetch('http://198.168.0.104:3000/ru/reset-password',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                password:event.target.password.value,
                confirmpass:event.target.confirmpass.value
            })
        })
        //then(res=>res.json())
        .then(async (res)=>{
            console.log('res::',res);
            if(res.statusText==='OK'){
                await alert('Your password is change')
            }
            else{
                alert('your change password is not match')
            }
        }).catch(err=>{
            console.log('Error::',err);
            alert('some thing went wrong')
        })
    }
    // handleChange(event){
    //   let input=this.state.input;
    //   input[event.target.name]=event.target.value;
      
    //   this.setState({
    //     input
    //   });
    // }
    // validate(){
    //     let input=this.state.input;
    //     let errors={};
    //     let isValid=true;

    //     if(!input['password']){
    //         isValid=false;
    //         errors['password']='please enter your password';
    //     }
    //     if(!input['confirmpass']){
    //         isValid=false;
    //         errors['confirmpass']='please enter your confirm password';
    //     }
    //     if(typeof input['password']!=='undefined' && typeof input['confirmpass']!==undefined){

    //        if(input['password'] !=input['confirmpass']){
    //            isValid=false;
    //            errors['password']='password dosent match';

    //        }
    //     }
    //     this.setState({
    //         errors:errors
    //     });
    //     return isValid;
    // }

    render() {
    
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
                Forgot Password
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Row>
                  <Col sm={10}>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="Password">
                        <Form.Label>Password  </Form.Label>
                        <Form.Control
                          className="from-input-box"
                          type="password"
                          name="password"
                          required
                          placeholder="Password"
                          // value={this.state.input.password}
                          // onChange={this.handleChange}
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
                          // value={this.state.input.confirmpass}
                          // onChange={this.handleChange}
                        />
                        {/* <div className='text-danger'>
                            {this.state.errors.confirmpass}
                        </div> */}
                      </Form.Group>
                      <Form.Group>
                        <Button variant="primary" type="submit" className="register-btn">Submit</Button>
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
export default Forgot;
