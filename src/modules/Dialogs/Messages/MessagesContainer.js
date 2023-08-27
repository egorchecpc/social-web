import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";


function MessagesContainer(props) {
    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }
    let updateMessage = (text) => {
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
    }

    return (<Messages messages={props.messages}
                      messageNewText={props.messageNewText}
                      addMessage={addMessage}
                      updateMessage={updateMessage}/>);
}

export default MessagesContainer;
