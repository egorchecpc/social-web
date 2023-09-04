import s from './Header.module.css';
import logo from '../../img/logo.png'
import {Link} from "react-router-dom";


function Header(props) {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <img
                    src={logo}
                    alt="logo"/>
                <div className={s.header__login}>
                    {props.isAuth?<div>{props.login}</div>:<Link to={'/auth'}>login</Link>}
                </div>
            </div>

        </div>
    );
}

export default Header;
