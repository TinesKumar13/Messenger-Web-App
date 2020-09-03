import React, {useState, useEffect} from 'react';

import './App.css';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import hello from './hello.png';
import neon from './neon.jpg';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

const [input, setInput] = useState('');
const [messages, setMessages] = useState([
 
]);
const [username, setUsername] = useState('');


useEffect(() => {
 
 db.collection('messages').orderBy('timestamp','desc')
   .onSnapshot(snapshot => {
  setMessages(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
 })
}, [])


useEffect(() => {
  setUsername(prompt('Please enter your name:'));
}, [])


const sendMessage = (event) => {
  event.preventDefault();

  db.collection('messages').add({
    message:input,
    username:username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })

  
  setInput('');
}

  return (
    <div className="App">
      <img style={{width:250, height:250, position:'center',bottom:0}} src={hello} alt="Logo" />
      <img className="neon" style={{width:250, height:250, position:'center',bottom:0}} src={neon} alt="Logo" />
      <h2 className="Greet">Welcome {username}</h2>
    

      <form className="app__form">
    <FormControl className="app__formControl">
    
    <Input className="input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>

    <IconButton className="icon" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
      

      <SendIcon/>
    </IconButton>




    
    </FormControl>  

      
      
      </form>
      <FlipMove>
    {
      messages.map(({id,message}) => (

        <Message key={id} username = {username} message={message}/>
        
      ))
    }
    </FlipMove>
    </div>
  );
}

export default App;
