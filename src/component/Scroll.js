// import React, { Component } from 'react';
// import './scroll.css'
// import {Link} from 'react-router-dom'

// class Scroll extends Component {
//     constructor(props){
//         super(props);

//     }
//     render() {

//         return (
//             <div>
//                  <div className="scroll-heading">
//                     <h2>Introducing MrMechanic Luxe</h2>
//                     </div>
//                         <div className="scroll">
//                     <Link to="/info">
//                     <div className="scroll-main">
//                         <div className="scroll-image">
//                          <img className="picture" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg" alt=""/>
//                          <h5 className="scroll-footer">Trouble With Your Audi</h5>
//                         </div>

//                         </div>
//                         </Link>
//                         <Link to="/denting">
//                     <div className="scroll-main">
//                         <div className="scroll-image">
//                          <img className="picture" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/2-Never-Worry-about-your-Merc-again-(exclamation-mark)-State-of-the-Art-Workshops.jpg" alt=""/>
//                          <h5 className="scroll-footer">Trouble With Your Audi</h5>
//                         </div>
//                         </div>
//                         </Link>
//                         <Link to="/denting">
//                     <div className="scroll-main">
//                         <div className="scroll-image">
//                          <img className="picture" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/3-Get-Your-BMW-Serviced-(-exclamation-mark-)-6-Months-Warranty.jpg" alt=""/>
//                          <h5 className="scroll-footer">Trouble With Your Audi</h5>
//                         </div>
//                         </div>
//                         </Link>
//                         <Link to="/denting">
//                     <div className="scroll-main">
//                         <div className="scroll-image">
//                          <img className="picture" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/4-An-Experience-your-Jag-Deserves---24-X-7-Support.jpg" alt=""/>
//                          <h5 className="scroll-footer">Trouble With Your Audi</h5>
//                         </div>
//                         </div>
//                         </Link>
//                         </div>

//             </div>
//         );
//     }
// }

// export default Scroll;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import "./scroll.css"
// const options = {
//     items: 4,
// };
// class Scroll extends React.Component{
//   render()
//   {
//     return (
//     <OwlCarousel
//     className="owl-theme"
//     loop
//     margin={10}
//     nav
// >

//      <div class="item"><img className="setting" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg"/></div>
//      <div class="item"><img src="2.jpg"/></div>
//      <div class="item"><img src="3.jpg"/></div>
//      <div class="item"><img src="4.jpg"/></div>
//            <div class="item"><img src="5.jpg"/></div>
// </OwlCarousel>
//     )
//   }
// }
// export default Scroll

// import React from "react";
// import "./scroll.css";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";

// export default function Scroll() {
// return (
//  <div className="App">
// <AliceCarousel autoPlay autoPlayInterval="3000">
// <div className="scroll">

//                    <div className="scroll-main">
//                              <div className="scroll-image">
//                           <img className="picture" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg" alt=""/>
//                           <h5 className="scroll-footer">Trouble With Your Audi</h5>
//                          </div>
//                          </div>
//                          </div>
//                          <div className="scroll">

//                     <div className="scroll-main">
//                               <div className="scroll-image">
//                            <img className="picture" src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg" alt=""/>
//                            <h5 className="scroll-footer">Trouble With Your Audi</h5>
//                           </div>
//                           </div>
//                           </div>
// {/* <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg" className="sliderimg" alt=""/>
// <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg" className="sliderimg" alt=""/>
// <img src="https://websiteasset.s3.ap-south-1.amazonaws.com/New+Website/components/LuxeServices/1-Troubles-with-your-Audi-(question-mark)-Highly-Trained-Mechanics.jpg" className="sliderimg" alt=""/> */}

// </AliceCarousel>
// </div>
// );
// }

// var Scroll = React.createClass({
//     render: function() {
// // class Scroll extends Component{
// //     render(){
//     return (
//     <div>
//     <meta charSet="utf-8" />
//     <title>Owl-carousel Cards Slider | CodingNepal</title>
//     <link rel="stylesheet" href="style.css" />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
//     <div className="slider owl-carousel">
//     <div className="card">
//     <div className="img">
//     <img src="#" alt="" /></div>
//     <div className="content">
//     <div className="title">
//     Briana Tozour</div>
//     <div className="sub-title">
//     Graphic Designer</div>
//     <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
//     <div className="btn">
//     <button>Read more</button>
//     </div>
//     </div>
//     </div>
//     <div className="card">
//     <div className="img">
//     <img src="#" alt="" /></div>
//     <div className="content">
//     <div className="title">
//     Pricilla Preez</div>
//     <div className="sub-title">
//     Web Developer</div>
//     <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
//     <div className="btn">
//     <button>Read more</button>
//     </div>
//     </div>
//     </div>
//     <div className="card">
//     <div className="img">
//     <img src="#" alt="" /></div>
//     <div className="content">
//     <div className="title">
//     Eliana Maia</div>
//     <div className="sub-title">
//     App Developer</div>
//     <p>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
//     <div className="btn">
//     <button>Read more</button>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     );
//     }
//     });
//     export default Scroll

// import React, { Component } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './scroll.css'

// class Scroll extends Component {
//     render() {
//         return (
//    <div>
//                        <div className="slider owl-carousel">
//           <div className="card">
//             <div className="img">
//               <img src="#" alt="" /></div>
//             <div className="content">
//               <div className="title">
//                 Briana Tozour</div>
//               <div className="sub-title">
//                 Graphic Designer</div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
//               <div className="btn">
//                 <button>Read more</button>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="img">
//               <img src="#" alt="" /></div>
//             <div className="content">
//               <div className="title">
//                 Pricilla Preez</div>
//               <div className="sub-title">
//                 Web Developer</div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
//               <div className="btn">
//                 <button>Read more</button>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="img">
//               <img src="#" alt="" /></div>
//             <div className="content">
//               <div className="title">
//                 Eliana Maia</div>
//               <div className="sub-title">
//                 App Developer</div>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit modi dolorem quis quae animi nihil minus sed unde voluptas cumque.</p>
//               <div className="btn">
//                 <button>Read more</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//             // </div>
//     );

//     }
// }

// export default Scroll;

import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './scroll.css'
import car1 from './imagecard/car1.jpg'
import car2 from './imagecard/car2.jpg'
import car3 from './imagecard/car3.jpg'
function Scroll() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="main-caro" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block "
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



export default Scroll;
