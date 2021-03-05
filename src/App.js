import react,{useState,useEffect} from 'react'
import { Button,InputLabel,Input,FormControl } from '@material-ui/core';
import Message from './Message'
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
    })
  }, [])
  
  useEffect(() => {
    setUsername(prompt('Votre Nom SVP !!'))
  }, [])

  const sendMessage = (event) =>{
    event.preventDefault();
    setMessage([{username,message:input},...messages])
    db.collection('messages').add({
      message:input,
      username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }
    )
    setInput('')
  }
   
  return (
    <div className="App">
        <h1>salut {username}</h1>
      <form className="app__form" onSubmit={sendMessage}>
        <FormControl className='app__formcontrol'>
          <Input className='app__input' placeholder='Aa' value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className='app__iconButton' disabled={!input} type='submit' 
        variant="contained"
        color="primary"
        ><SendIcon/></IconButton>
        </FormControl>
      </form>
        <FlipMove>
        {
          messages.map(({id,message})=>(
            <Message key={id} username={username} message={message} />
          ))
        }
        </FlipMove>
    </div>
  );
}

export default App;
