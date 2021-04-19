// import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
// import './join.css'

// const Join =()=>{
//     const [name,setName]=useState('');
//     const [room,setRoom]=useState('');
//     return(
//         <div className="joinOut">
//             <div className="joinIn">
//                 <h1 className="head">Join</h1>
//                 <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)}/></div>
//                 <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=>setRoom(event.target.value)}/></div>
//                 {/* <Link onClick={event =>(!name||!room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}> */}
//                 <Link onClick={event =>(!name||!room)?event.preventDefault():null} to={{pathname:'/chat'}}>
//                 <button className="button-chat mt-20" type="submit">SignIn</button>
//                 </Link>
//             </div>
//         </div>
//     )
// }
// export default Join

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOut">
      <div className="joinIn">
        <h1 className="head">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button-chat mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}