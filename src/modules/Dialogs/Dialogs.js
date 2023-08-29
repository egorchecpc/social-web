import s from './Dialogs.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import ChatsContainer from "./Chats/ChatsConteiner";


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <ChatsContainer/>
            <MessagesContainer/>
        </div>
    );
}

export default Dialogs;
