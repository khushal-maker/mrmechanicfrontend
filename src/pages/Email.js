import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap'
import './modalbtn.css'
// import ForgotModal from './Forgot'

class Email extends Component {
    constructor(props){
        super(props);
        this.state={
             forgotModal:false,
            //  input:{},
            //  errors:{}
        }
        // this.handleChange=this.handleChange.bind(this);
    }
    // handleChange(event){
    //   let input=this.state.input;
    //   input[event.target.name]=event.target.value;

    //   this.setState({
    //     input
    //   });
    // }
    // validate(){
    //   let input =this.state.input;
    //   let errors={};
    //   let isValid=true;

    //   if(!input["email"]){
    //      isValid=false;
    //      errors["email"]="please enter the valid email";
    //   }

    //   if(typeof input["email"]!==undefined){
    //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //     isValid=false;
    //     errors["email"]="please enter the valid email";
    //   }
    //   return isValid;
    // }
    handleSubmit(event) {
      event.preventDefault(); 
  
      fetch('http://192.168.1.105:3000/ru/sendmail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: event.target.email.value
         
        })
      }) 
        .then(async (res) => {
          console.log("res ::", res);
          if (res.statusText === "OK") {
            await alert('Check Your Email')
          }
          else {
            alert('Not Matched')
          }
        }).catch(err => {
          console.log("Error :: ", err);
          alert('Some Thing Went Wrong')
        })
    }
    render() {
      let forgotModalClose=()=>this.setState({forgotModal:false})
        return (
            <div>
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Enter Your Email Address
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                <Row>
                  <Col sm={10}>
                   <Form onSubmit={this.handleSubmit}>
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
                    <Form.Group>
                      <Button variant="primary" type="submit" /* onClick={()=>this.setState({forgotModal:true})}*/ className="register-btn">Submit</Button>
                        {/* <ForgotModal
                          show={this.state.forgotModal}
                        onHide={forgotModalClose}
                          /> */}
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
export default Email;
