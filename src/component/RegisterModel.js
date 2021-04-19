// import React, { Component } from 'react';
// import Modal from "react-bootstrap/Modal";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
// import { Row, Col, Form } from 'react-bootstrap'
// import './form.css';


// class RegisterModel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }


//   handleSubmit(event) {
//     event.preventDefault();

//     fetch('http://192.168.0.104:3000/ru/register', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         firstname: event.target.firstname.value,
//         lastname: event.target.lastname.value,
//         email: event.target.email.value,
//         phno: event.target.phno.value,
//         password: event.target.password.value,
//         confirmpass: event.target.confirmpass.value
//       })
//     })
//       // .then(res => res.json())
//       .then(async (res) => {
//         console.log("res ::", res);
//         if (res.statusText === "OK") {
//           await alert('Register successfully')
//         }
//         else {
//           alert('Not Matched')
//         }
//       }).catch(err => {
//         console.log("Error :: ", err);
//         alert('Some Thing Went Wrong')
//       })
//   }

//   render() {
//     return (
//       <div>
//         <Modal
//           {...this.props}
//           size="lg"
//           aria-labelledby="contained-modal-title-vcenter"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="contained-modal-title-vcenter">
//               Register
//         </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <div className="container">
//               <Row>
//                 <Col sm={10}>
//                   <Form onSubmit={this.handleSubmit}>
//                     <Form.Group controlId="FirstName">
//                       <Form.Label>FirstName</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="firstname"
//                         required
//                         placeholder="Firstname"
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="LastName">
//                       <Form.Label>LastName</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="lastname"
//                         required
//                         placeholder="LastName"
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="Email">
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="email"
//                         required
//                         placeholder="Email"
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="Phone">
//                       <Form.Label>Phone</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="phno"
//                         required
//                         placeholder="Phone"
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="Password">
//                       <Form.Label>Password  </Form.Label>
//                       <Form.Control
//                         type="password"
//                         name="password"
//                         required
//                         placeholder="Password"
//                       />
//                     </Form.Group>
//                     <Form.Group controlId="ConfirmPassword">
//                       <Form.Label>ConfirmPassword</Form.Label>
//                       <Form.Control
//                         type="password"
//                         // name="confirmpass"
//                         required
//                         placeholder="ConfirmPassword"
//                       />
//                     </Form.Group>
//                     <Form.Group>
//                       <Button variant="primary" type="submit" className="addbtn">Register</Button>
//                       <Button variant="danger" onClick={this.props.onHide} >Close</Button>
//                     </Form.Group>
//                   </Form>
//                 </Col>
//               </Row>
//             </div>
//           </Modal.Body>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default RegisterModel;