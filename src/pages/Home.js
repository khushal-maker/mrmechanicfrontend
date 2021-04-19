import React, { Component } from "react";
// import { Card } from 'react-bootstrap';
import Card from "../component/Sample";
import image from "../image/img2.jpg";
import "./image.css";
import Navbar from "../component/Navbar";
import { FooterContainer } from "../container/footer";
import { GlobalStyles } from "../global-styles";
import ImageCard from "../component/ImageCard";
import Add from "../component/Add";
import Scroll from "../component/Scroll";
import Loading from '../component/Loading'

class Home extends Component {
  render() {
    return (
      <>
      {/* <Loading> */}
        <div className="media-div">
          <Navbar />
          <div className="pic">
            <img src={image} alt="image" className="home-img" />
          </div>
          <Card />
          <Add />
          <Scroll />
          <ImageCard />
          <GlobalStyles />
          <FooterContainer />
        </div>
        {/* </Loading> */}
      </>
    );
  }
}

export default Home;
