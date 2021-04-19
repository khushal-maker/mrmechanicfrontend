import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import { Row, Col, Form } from 'react-bootstrap'
import './addpopup.css'

class AddPopup extends Component {
    render() {
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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
         <ul>
            <li>We adhere to our operational excellence commitment towards delivering exceptional customer experience. Every time you opt for a free Pickup and Drop with MrMechanic </li> 
            <li>With the GoMechanic Assurance Program, each customer is protected against any damages caused during the pickup and delivery of their cars by GoMechanic Executives upto a maximum of<h5> INR 25000</h5> </li> 
            <li>In the unlikely event of any damages during your car's pick and drop, you can reach out to us on<h5> 6353916529 </h5>to claim the proven damage</li> 
            <li> This is Valid only for Service Paid Online.The claim amoumt will be process only when damage are proven to ba caused by MrMechanic</li> 
            <li>The Insurance coverage is valid only on<h5> Perodic Services,Ac Services,Cleaning&Detailing,Denting,Denting&Painting,Wheel Care Services,Tyer,Batteries,Glasses,Lights and Insurance Claim Categories</h5></li> 
            <li>The MrMechanic Assurance Program is not valid on Walkins and Cancelled orders </li> 
         </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
            </div>
        );
    }
}

export default AddPopup;