// import React from 'react'

// import './input.css'


// const Input=({message,setMessage,sendMessage})=>(
//     <form className='inputForm'>
//         <input
//          className="inputField"
//          type="text"
//          placeholder="Type a message.."
//          vlaue={message}
//          onChange={(event)=>setMessage(event.target.value)}
//          onKeyPress={event => event.key === 'Enter' ? sendMessage(event):null}
//         />
//         <button className="send" onClick={(event)=>sendMessage(event)}>Send</button>
//     </form>
// )
// export default Input

import React from 'react';

import './input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="inputForm">
    <input
      className="inputField"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="send" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;