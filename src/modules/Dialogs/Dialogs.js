import s from './Dialogs.module.css';
import Users from "./Users/Users";
import MessagesContainer from "./Messages/MessagesContainer";


function Dialogs(props) {

    return (
        <div className={s.dialogs}>
            <Users userData={props.dialogsPage.userData}/>
            <MessagesContainer messages={props.dialogsPage.messages}
                               messageNewText={props.dialogsPage.messageNewText}
                               dispatch={props.dispatch}/>
        </div>
    );
}

export default Dialogs;
