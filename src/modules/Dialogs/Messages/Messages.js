import s from './Messages.module.css';
import Message from "./Message/Message";
import React from "react";


function Messages(props) {

    let newMessage = React.createRef();
    let messages = props.messages.map((message) => <Message id={message.id} text={message.text}/>);

    let addMessage = () => {
        props.addMessage()
    }
    let updateMessage = () => {
        let text = newMessage.current.value
        props.updateMessage(text)
    }

    return (
        <div className={s.messages}>
            {messages}
            <div className={s.messages__add}>
                <input ref={newMessage} onChange={updateMessage} value={props.messageNewText} type="text"
                       name="input" placeholder="your message..."/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Messages;
