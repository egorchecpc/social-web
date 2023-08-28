import s from './Dialogs.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersConteiner";


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <UsersContainer/>
            <MessagesContainer/>
        </div>
    );
}

export default Dialogs;
