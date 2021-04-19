// import React from 'react'
// import closeIcon from '../../icon/closeIcon.png'
// import onlineIcon from '../../icon/onlineIcon.png'

// import './infobar.css'


// const InfoBar=({room})=>(
//         <div className="Bar">
//             <div className="leftInn">
//                <img className="onlineIcon" src={onlineIcon} alt="online image"/>
//                <h3>{room}</h3>
//             </div>
//             <div className="rightInn">
//               <a href="/"><img  className='closeIcon' src={closeIcon} alt="close iamge"/></a>
//             </div>

//         </div>
// )
// export default InfoBar

import React from 'react';

import onlineIcon from '../../icon/onlineIcon.png';
import closeIcon from '../../icon/closeIcon.png';

import './infobar.css';

const InfoBar = ({ room }) => (
  <div className="Bar">
    <div className="leftInn">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInn">
      <a href="/"><img className="closeIcon" src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;