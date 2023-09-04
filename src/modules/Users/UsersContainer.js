import {connect} from "react-redux";
import {
    addUsers,
    follow,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import {useEffect} from "react";
import Users from "./Users";
import UsersAPI from "../../api/api";

function UsersContainer(props) {
    useEffect(() => {
        props.toggleIsFetching(true)
        UsersAPI.setUsersAPI(props.pageNum).then(data => {
                props.toggleIsFetching(false)
                props.setUsers(data.items);
            });
    }, [props.pageNum]);
    const showMoreUsers = () => props.addUsers();
    return (
        <Users users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               showMoreUsers={showMoreUsers}
               isFetching={props.isFetching}
               toggleFollowingProgress={props.toggleFollowingProgress}
               followingInProgress={props.followingInProgress}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNum: state.usersPage.pageNum,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {addUsers, follow, unfollow, setUsers, toggleIsFetching, toggleFollowingProgress})(UsersContainer)


