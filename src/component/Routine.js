import React, { Component } from "react";
import "./info.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "../component/Navbar";
import { FooterContainer } from "../container/footer";
import { GlobalStyles } from "../global-styles";
import s1 from './imagecard/s1.jpg'
import s2 from './imagecard/s2.jpg'
import s3 from './imagecard/s3.jpg'
import s4 from './imagecard/s4.jpg'
import s5 from './imagecard/s5.jfif'

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
              src={s1}
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
              src={s2}
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
              src={s3}
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
              src={s4}
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
              src={s5}
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
