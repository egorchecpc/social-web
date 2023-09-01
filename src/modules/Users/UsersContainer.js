import {connect} from "react-redux";
import {addUsersAC, followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {useEffect} from "react";
import axios from "axios";
import Users from "./Users";

function UsersContainer(props) {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=3&page=${props.pageNum}`)
            .then(response => {
                props.setUsers(response.data.items);
            });
    }, [props.pageNum]);
    const showMoreUsers = ()=> props.addUsers();
    return (
        <Users users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               showMoreUsers={showMoreUsers}/>
    )


}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNum: state.usersPage.pageNum
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        addUsers: () => {
            dispatch(addUsersAC())
        }}

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)


