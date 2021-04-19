// import React, { Component } from 'react';
// import Card from "react-bootstrap/Card";
// import './Cards.css'

// class Sample extends Component {
//     render() {
//         return (

//             <div>
//                 <Card style={{ width: '18rem' }} className='main'>
//                     <Card.Img variant="top"className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons/denting-painting-v3.svg" />
//                     <Card.Body>
//                         <Card.Title >Tyres</Card.Title>
//                         <Card.Text >
//                             Services for the Tyers
//                              </Card.Text>
//                     </Card.Body>
//                 </Card>
//                  <Card style={{ width: '18rem' }} className='main'>
//                     <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons/schedule-services-v3.svg" />
//                     <Card.Body>
//                         <Card.Title >Engine</Card.Title>
//                         <Card.Text >
//                              Services for the Engine
//                              </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className='main'>
//                     <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons/battery-v3.svg" />
//                     <Card.Body>
//                         <Card.Title >Washing</Card.Title>
//                         <Card.Text >
//                             Services for the Washing
//                              </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className='main'>
//                     <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/4.png" />
//                     <Card.Body>
//                         <Card.Title >Colors for car</Card.Title>
//                         <Card.Text >
//                             Services for the Color
//                              </Card.Text>
//                     </Card.Body>
//                 </Card> 
//                 <Card style={{ width: '18rem' }} className='main'>

//                     <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons/tyre-v3.svg" />
//                     <Card.Body>
//                         <Card.Title >Removing Dents</Card.Title>
//                         <Card.Text >
//                             Services for the Removing dents
//                              </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className='main'>

//                     <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons/lights-fitments-v3.svg" />
//                     <Card.Body>
//                         <Card.Title >Batteries</Card.Title>
//                         <Card.Text >
//                              Batteries for the sales and services
//                              </Card.Text>
//                     </Card.Body>
//                 </Card>
//                 <Card style={{ width: '18rem' }} className='main'>

//               <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/9.png" />
//               <Card.Body>
//                   <Card.Title >Accessories</Card.Title>
//                   <Card.Text >
//                       Services for the Accessories
//                        </Card.Text>
//               </Card.Body>
//                 </Card>
//           <Card style={{ width: '18rem' }} className='main'>

//               <Card.Img variant="top" className='img' src="https://storage.googleapis.com/gomechanic_assets/category_icons_new/xhdpi/12.png" />
//               <Card.Body>
//                   <Card.Title >Light&fitments</Card.Title>
//                   <Card.Text >
//                       Services for the Lights
//                        </Card.Text>
//               </Card.Body>
//         </Card>
//         </div> 

//         );
//     }
// }
// export default Sample;

import React,{Component} from 'react' 
import CardItem from './CardItem'
import './Cards.css'
import cd1 from './imagecard/cd1.svg'
import cd2 from './imagecard/cd2.svg'
import cd3 from './imagecard/cd3.svg'
import cd4 from './imagecard/cd4.png'
import cd5 from './imagecard/cd5.svg'
import cd6 from './imagecard/cd6.png'
import cd7 from './imagecard/cd7.svg'
import cd8 from './imagecard/cd8.png'

        
class Sample extends Component{
    constructor(props){
        super(props);
        this.state={
          carddetail:[]
        }
     
      }
    //   componentDidMount(){
    //     fetch("http://192.168.1.103:3000/ru/adata")
    //     .then(res=>res.json())
    //     .then((data)=>{
    //       this.setState({carddetail:data})
    //     })
    //     .catch(console.log)
    //   } 
    handleSubmit(event) {
        event.preventDefault(); 
    
        fetch('http://192.168.1.103:3001/ru/adata', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            // firstname: event.target.firstname.value,
            // lastname: event.target.lastname.value,
            // email: event.target.email.value,
            // password: event.target.password.value,
            // confirmpass: event.target.confirmpass.value
            carddetail:event.target.carddetail.value
          })
        }) 
          .then(async (res) => {
            console.log("res ::", res);
            if (res.statusText === "OK") {
              await alert('Getting the card detail succesfully')
            }
            else {
              alert('Not Matched')
            }
          }).catch(err => {
            console.log("Error :: ", err);
            alert('Some Thing Went Wrong')
          })
      }
    render(){
        return (
   
        <div className="space">
            <div className="cards">
                <h1 className="media-head">Services</h1>
                <p className="para-content">Services Related to the cars provide by us</p>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem  onSubmit={this.handleSubmit} 
                                src={cd1}
                                label="Service for the car paint"
                                path='/info'
                              
                            />
                            <CardItem
                                src={cd2}
                                label="Routine Services"
                                path='/routine'
                                
                            />
                            <CardItem
                                src={cd3}
                                label="Battery Services"
                                path='/battery'
                                
                            />
                               <CardItem
                                src={cd4}
                                label="Car Washing"
                                path='washing'
                            />
                            
                        </ul>
                        <ul className="cards__items">
                            <CardItem
                                src={cd5}
                                label="Tyer Services"
                                path="/tyer"
                            />
                            <CardItem
                                src={cd6}
                                label="Denting Services"
                                path="denting"
                            />
                            <CardItem
                                src={cd7}
                                label="Custom Services"
                                path='custom'
                            />
                             <CardItem
                                src={cd8}
                                label="Accessories"
                                path='accessories'
                            />
                        </ul>
                        
                    </div>
                </div>
            </div>
            </div>
        // </div>
    );
 
};


}
export default Sample;