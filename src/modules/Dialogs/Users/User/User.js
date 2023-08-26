import s from './User.module.css';
import {NavLink} from "react-router-dom";

function User(props) {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.user}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default User;
