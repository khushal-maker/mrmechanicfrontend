import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import './style.css'

class ImageCard extends Component {
  render() {
    return (
    <div>
      <div className="main-container">
      <div className="line"></div>
       <div className="heading">
         
         <h1 className="main-heading">How Mr.Mechanic Works?</h1>
         <div className="sub-title">
           <div className="list">
             <ul>
               <h3 className='h3-first1'>1.Select The Perfect Car Services</h3>
               <li className="list1">From MrMechanic broad portfolio of services</li>
               <img className='image-car' src='https://gomechanic.in/graphics/How%20GoM%20Works/png/Select-The-Perfect-Car-Service.png' alt=''/>
               <h3 className='h3-first2'>2.Schedule Free Doorstep Pick-up</h3>
               <li className="list2">We Offer free pickup and drop for all services booked</li>
               <img className='image-car2' src='https://gomechanic.in/graphics/How%20GoM%20Works/png/Schedule-Free-Doorstep-Pick-up.png' alt=''/>
               <h3 className='h3-first3'>3.Track Your Car Service Real-Time</h3>
               <li className="list3">We will take care of everything from here</li>
               <img className='image-car3' src='https://gomechanic.in/graphics/How%20GoM%20Works/png/track-your-car-service-real-time.png' alt=''/>
               <h3 className='h3-first4'>4.Earn While We Service</h3>
               <li className="list4">Spread the word!You get Rs.750</li>
               <img className='image-car4' src='https://gomechanic.in/graphics/How%20GoM%20Works/png/Earn-While-We-Service.png' alt=''/>
             </ul>
           </div>
         </div>
       </div>
       </div>
      </div>
    );
  }
}

export default ImageCard;
