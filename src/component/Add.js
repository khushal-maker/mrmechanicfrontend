import React,{Component} from 'react'
import './add.css'
import { Link } from 'react-router-dom';
import AddPopup from './AddPopup'

class Add extends Component{
    constructor(props){
        super(props);
        this.state={
            addPopup:false
        };
    }
    render(){
        let addPopupClose=()=>this.setState({addPopup:false});
        return(
           <div className="major">
              
               <div className="ray"></div>
               <div className="add-main">
                   <div className="add-text"> 
                       <h2 className="add-h1">Mr.Mechanic Assurance Program</h2>
                       <div className="add-list">
                           <ul>
                               <li className='style-list'>Upto Rs.25,0000 insurance protection with every service request</li>
                               <li className='style-list'>Program protect users against damage caused during free pickup and delivery of car</li>
                               
                           </ul>
                           <Link style={{color:"white"}} onClick={()=>this.setState({addPopup:true})}>
                           <div className="footer">
                               <h4>Know More</h4>   
                           </div>
                           </Link>
                           <img className="add-image" src="https://gomechanic.in/graphics/Group7557.png" alt=""/>
                       </div>
                   </div>
               </div>
             
               <AddPopup
               show={this.state.addPopup}
               onHide={addPopupClose}
               />
           </div>
        )
    }
}
export default Add;