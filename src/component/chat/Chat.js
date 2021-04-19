// import React,{useState,useEffect} from 'react'
// import queryString from 'query-string'
// import io from 'socket.io-client'
// import './chat.css'
// import InfoBar from '../infobar/InfoBar'
// import Input from '../Input/Input'
// import Messages from '../Messages/Messages'

// let socket;
// const Chat =({location})=>{
//     const [name,setName]=useState('');
//     const [room,setRoom]=useState('');
//     const [message,setMessage]=useState('');
//     const [messages,setMessages]=useState([]);
//     const ENDPOINT='http://192.168.1.106:3000';
//     useEffect(()=>{
//         const {name,room}=queryString.parse(location.search);
//         socket=io(ENDPOINT);
//         setName(name);
//         setRoom(room);

//         socket.emit('join',{name,room},()=>{
//         });
//         return ()=>{
//             socket.emit('disconnect');

//             socket.off();
//         }
//     },[ENDPOINT,location.search]);

//     useEffect(()=>{
//         socket.on('message',(message)=>{
//                 setMessages([...messages,message]);
//         })
//     },[messages]);

//     const sendMessage =(event)=>{
//         event.preventDefault();

//         if(message){
//             socket.emit('sendMessage',message,()=>setMessage(''));
//         }
//     }
//      console.log('message','messages');

//     return(
//         <div className="outerContainer">
//             <div className="contain">
//                 <InfoBar room={room}/>
//               <Input message={message} setMessage={setMessages} sendMessage={sendMessage}/>
//               <Messages messages={messages} name={name}/>
//             </div>
//         </div>
//     )
// }
// export default Chat


import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../infobar/InfoBar';
import Input from '../Input/Input';

import './chat.css';

const ENDPOINT = 'http://192.168.1.106:3000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="contain">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;