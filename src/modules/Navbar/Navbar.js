import s from './Navbar.module.css';
import {CustomLink} from "../MainPage/CustomLink";

function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__links}>
                <div className={s.navbar__link}>
                    <CustomLink
                        to='/profile'>
                        Profile
                    </CustomLink>
                </div>
                <div className={s.navbar__link}>
                    <CustomLink to='/dialogs'>
                        Messeges
                    </CustomLink>
                </div>
                <div className={s.navbar__link}>
                    <CustomLink to='/news'>
                        News
                    </CustomLink>
                </div>
                <div className={s.navbar__link}>
                    <CustomLink to='/music'>
                        Music
                    </CustomLink>
                </div>
                <div className={`${s.navbar__link} ${s['navbar__link--margin']}`}>
                    <CustomLink to='/settings'>
                        Settings
                    </CustomLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
