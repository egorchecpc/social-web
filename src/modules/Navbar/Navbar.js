import s from './Navbar.module.css';
import {CustomLink} from "../MainPage/CustomLink";

function Navbar() {
    return (<div className={s.navbar}>
            <div className={s.navbar__links}>
                <div className={s.navbar__link}>
                    <CustomLink
                        to='/Profile'>
                        Profile
                    </CustomLink>
                </div>
                <div className={s.navbar__link}>
                    <CustomLink to='/Dialogs'>
                        Messeges
                    </CustomLink>
                </div>
                <div className={s.navbar__link}>
                    <CustomLink to='/News'>
                        News
                    </CustomLink>
                </div>
                <div className={s.navbar__link}>
                    <CustomLink to='/Music'>
                        Music
                    </CustomLink>
                </div>
                <div className={`${s.navbar__link} ${s['navbar__link--margin']}`}>
                    <CustomLink to='/Settings'>
                        Settings
                    </CustomLink>
                </div>
            </div>
        </div>);
}

export default Navbar;
