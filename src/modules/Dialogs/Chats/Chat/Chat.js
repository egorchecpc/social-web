import s from './Chat.module.css';
import {NavLink} from "react-router-dom";

function Chat(props) {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.chat}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default Chat;
