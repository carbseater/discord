import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import Message from './Message';
import { selectUser } from './userSlice';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './appSlice';
import db from './firebase';
import firebase from 'firebase';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setinput] = useState("");
    const [messages, setmessages] = useState([]);

    // this function is setting the messages from existing firebase db
    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) =>
                    setmessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
       
    }, [channelId])

    // this function is adding messages to firebase dataBase
    const sendMessage = (e) => {
        e.preventDefault();
        if (input)
        {db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });
    
    setinput("");
            
        }
        else
            alert("Please enter any text !")
        
    }
    
    return (

        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}/>
                ))}
                
               
            </div>
            <div  className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input value={input}
                        disabled={!channelId || channelId === "ezk3Avq3TP8UgzTlJgL5"}
                        onChange={e => setinput(e.target.value)} placeholder={`Message #${channelName}`} />
                    <button className="chat__sendButton" type="submit" onClick={sendMessage} ><SendRoundedIcon /></button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
