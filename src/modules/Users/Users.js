import s from './Users.module.css'
import axios from "axios";
import {useEffect} from "react";

function User(props) {
    useEffect(() => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${props.pageNum}`).then(response => {
                props.setUsers(response.data.items);
            });
    }, [props.pageNum]);
    const showUsers = ()=>props.addUsers();
    return (
        <div className={s.users}>
            { props.users.map(u =>
                <div key={u.id} className={s.user}>
                    <div className={s.userImg}>
                        <img src={u.photos.small!=null? u.photos.small:'https://clipart-library.com/img1/773345.png'} alt='user' />
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userName}>{u.name}</div>
                        <div className={s.userStatus}>{u.status}</div>
                        {/*<div className={s.userLocation}>{u.location.city} {u.location.country}</div>*/}
                    </div>
                    {u.followed?
                        <button onClick={()=>{props.unfollow(u.id)}} className={s.followed}>unfollow</button>:
                        <button onClick={()=>{props.follow(u.id)}} className={s.followed}>follow</button>
                    }
                </div>
            )}
            <button onClick={showUsers} className={s.users__show}>Show More</button>
        </div>

    )


}
export default User