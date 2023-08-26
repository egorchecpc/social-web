import s from './Header.module.css';
import logo from '../../img/logo.png'


function Header() {
    return (
        <div className={s.header}>
            <div className={s.header__logo}>
                <img
                    src={logo}
                    alt="logo"/>
            </div>
        </div>
    );
}

export default Header;
