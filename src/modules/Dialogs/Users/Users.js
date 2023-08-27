import s from './Users.module.css';
import User from './User/User'

function Users(props) {

    let users=props.userData.map((user)=><User name={user.name} id={user.id} />);

    return (
        <div className={s.users}>
            {users}
        </div>
    );
}

export default Users;
