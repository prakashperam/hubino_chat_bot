import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
// import Button from './UserEdit'
import TimeStamp from './TimeStamp'
import '../../styles/Chat.css'

//import action 

import {userMessage} from '../../actions/hubino';

const Chat = ({chat, outGoing, userMessage}) => {
    //handle user message
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const endOfMessages = useRef('');

    //smooth scrolling chat to bottom
    const scrollToBottom = () => {
      endOfMessages.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [chat]);
    
    //function that handles userSubmission 
    const handleClick = async(e)=>{
        console.log(outGoing)
        const code = e.keyCode || e.which;
        if(code===13){
            console.log(message)
            const inputResponse = {message : message, type : 'incoming', messageId : chat.length+1}
            userMessage(inputResponse)
            let flag = true
            for(var i=0;i<outGoing.length;i++){
                if(message === outGoing[i].message){
                    setResponse(outGoing[i].message)
                    const outputResponse = {message : message, type : 'outgoing'}
                    userMessage(outputResponse)
                    flag = false
                }
            }
            if(flag){
                const outputResponse = {message : 'enter correct message', type : 'outgoing', messageId: chat.length+2}
                userMessage(outputResponse)
            }
            setMessage('')
        }

    }

    //user edit messages double click

    const userHandleEdit = (e)=>{
        console.log('clicked me', e.currentTarget.textContent)
        let inputBox = document.getElementById('chatbox')
        inputBox.value = e.currentTarget.textContent
    }

    

    return (
        <div className='chat'>
            <h1 className="mainHeader">Hubino Chat Bot</h1>
            {/* diplay messages here */}
            {/* //In UI add two different sides left and right  */}
            <div className='chatbox'>
                {chat.length ===0 ? '' : chat.map((msg)=>
                    msg.type==='incoming'?<><div onClick = {userHandleEdit} className = {msg.type} >
                    <span className='textMessage'>{msg.message}</span> </div> <div className='timestamp'> <TimeStamp/></div> </> : <><div className = {msg.type} >
                    <span className='textMessage'>{msg.message}</span> </div> <div className='timestamp incoming_text'> <TimeStamp/></div></>)}
                    {/* to set the scroll bar to end of messages */}
                    <div ref={endOfMessages}></div>
            </div>
            <div className='inputContainer' >
                <input id='chatbox' 
                 onChange={(e)=>setMessage(e.target.value)} 
                onKeyPress={handleClick} value={message}
                placeholder = 'Type your message..'
                className='inputBox'
            >
            </input>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>({
    chat : state.hubino.messages,
    outGoing: state.hubino.botResponses,
})

export default connect(mapStateToProps, {userMessage})(Chat)
