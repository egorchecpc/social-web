import s from './ProfileInfo.module.css';


function ProfileInfo(props) {
    return (
        <div className={s.profile__info}>
            <div className={s.profile__cover}>
                <img
                    src='https://static1.squarespace.com/static/57dea572579fb3ea46810d43/t/57eeac69d1758ecd65691597/1475259501004/Genesis+1000x300.png?format=2500w'
                    alt='cover img'/>
            </div>
            <div className={s.profile__data}>
                <div className={s.profile__avatar}>
                    <img src="https://ferrero.co.ke/wp-content/uploads/2014/06/img.png" alt='ava'/>
                </div>
                <div className={s.profile__txt}>
                    <div className={s.profile__title}>
                        Egor Krychev
                    </div>
                    <div className={s.profile__subtitle}>
                        Date of Birth: 15 aguest <br/>
                        City: Misnk <br/> Education: BSUIR 2024 <br/> Website: egorchecpc
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
