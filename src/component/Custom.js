import React, { Component } from "react";
import "./info.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "../component/Navbar";
import { FooterContainer } from "../container/footer";
import { GlobalStyles } from "../global-styles";
import cu1 from './imagecard/cu1.jpg'
import cu2 from './imagecard/cu2.jpg'
import cu3 from './imagecard/cu3.jpg'
import cu4 from './imagecard/cu4.jpg'
import cu5 from './imagecard/cu5.jpg'

class Info extends Component {
  constructor(props){
    super(props);
    this.state={
      carddetail:[]
    }
 
  }
  componentDidMount(){
    fetch("")
    .then(res=>res.json())
    .then((data)=>{
      this.setState({carddetail:data})
    })
    .catch(console.log)
  }  
  render() {
    return (
     
      <div className="card-main">
        <Navbar />
        <div className="card-con">
          <Card.Title className="title-main">
            Services Related To Car Painting
          </Card.Title>
          <Card className="card-body">
            <Card.Img
              variant="top"
              src={cu1}
              className="image"
            />
            <Card.Title className="price">Rs.3990</Card.Title>
            <Card.Body>
              <Card.Title>Heavy AutoMobile Painting</Card.Title>
              <ul>
                <li className="detail">10000 Km or 1 Month Waranty</li>
              </ul>
              <Card.Text>
                <ul className="card-list">
                  <li className="card-info"> Manufacture in Amroli</li>
                  <li className="card-info"> Ruchu Rubbur Foundation</li>
                  <li className="card-info"> Ruchu-Tyers</li>
                </ul>
                <ul className="card-list2">
                  <li className="card-info"> Manufacture in Amroli</li>
                  <li className="card-info"> Ruchu Rubbur Foundation</li>
                  <li className="card-info"> Ruchu-Tyers</li>
                </ul>
              </Card.Text>
              <Button className="btn-info">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-con">
          <Card className="card-body" >
            <Card.Img
              variant="top"
              src={cu2}
              className="image"
            />
            <Card.Title className="price">Rs.3990</Card.Title>
            <Card.Body>
              <Card.Title>Automotive Painting Services</Card.Title>
              <ul>
                <li className="detail">car Spa And Cleaning</li>
              </ul>
              <Card.Text>
                <ul className="card-list">
                  <li className="card-info">All type Washing </li>
                  <li className="card-info">Use Nirma Powder</li>
                  <li className="card-info">Every Thing is Wash by us</li>
                </ul>
                <ul className="card-list2">
                  <li className="card-info">Assure you to clean</li>
                  <li className="card-info">Every 5 Month Free service</li>
                  <li className="card-info">All Kind of take care</li>
                </ul>
              </Card.Text>
              <Button className="btn-info">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-con">
          <Card className="card-body" >
            <Card.Img
              variant="top"
              src={cu3}
              className="image"
            />
            <Card.Title className="price">Rs.3990</Card.Title>
            <Card.Body>
              <Card.Title>Painting Services</Card.Title>
              <ul>
                <li className="detail">car Spa And Cleaning</li>
              </ul>
              <Card.Text>
                <ul className="card-list">
                  <li className="card-info">All type Washing </li>
                  <li className="card-info">Use Nirma Powder</li>
                  <li className="card-info">Every Thing is Wash by us</li>
                </ul>
                <ul className="card-list2">
                  <li className="card-info">Assure you to clean</li>
                  <li className="card-info">Every 5 Month Free service</li>
                  <li className="card-info">All Kind of take care</li>
                </ul>
              </Card.Text>
              <Button className="btn-info"> Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-con">
          <Card className="card-body" >
            <Card.Img
              variant="top"
              src={cu4}
              className="image"
            />
            <Card.Title className="price">Rs.3990</Card.Title>
            <Card.Body>
              <Card.Title>AutoMobile Painting</Card.Title>
              <ul>
                <li className="detail">car Spa And Cleaning</li>
              </ul>
              <Card.Text>
                <ul className="card-list">
                  <li className="card-info">All type Washing </li>
                  <li className="card-info">Use Nirma Powder</li>
                  <li className="card-info">Every Thing is Wash by us</li>
                </ul>
                <ul className="card-list2">
                  <li className="card-info">Assure you to clean</li>
                  <li className="card-info">Every 5 Month Free service</li>
                  <li className="card-info">All Kind of take care</li>
                </ul>
              </Card.Text>
              <Button className="btn-info">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-con">
          <Card className="card-body" >
            <Card.Img
              variant="top"
              src={cu5}
              className="image"
            />
            <Card.Title className="price">Rs.3990</Card.Title>
            <Card.Body>
              <Card.Title>Painting Work</Card.Title>
              <ul>
                <li className="detail">car Spa And Cleaning</li>
              </ul>
              <Card.Text>
                <ul className="card-list">
                  <li className="card-info">All type Washing </li>
                  <li className="card-info">Use Nirma Powder</li>
                  <li className="card-info">Every Thing is Wash by us</li>
                </ul>
                <ul className="card-list2">
                  <li className="card-info">Assure you to clean</li>
                  <li className="card-info">Every 5 Month Free service</li>
                  <li className="card-info">All Kind of take care</li>
                </ul>
              </Card.Text>
              <Button className="btn-info">Add To Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <GlobalStyles />
        <FooterContainer />
         </div>
    );
  }
  
}

export default Info;
