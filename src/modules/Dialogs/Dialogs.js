import s from './Dialogs.module.css';
import Users from "./Users/Users";
import Messages from "./Messages/Messages";


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <Users userData={props.dialogsPage.userData}/>
            <Messages messages={props.dialogsPage.messages} messageNewText={props.dialogsPage.messageNewText} dispatch={props.dispatch}/>
        </div>
    );
}

export default Dialogs;
