import {connect} from "react-redux";
import Users from "./Users";
import {addUsersAC, followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer