import {connect} from "react-redux";
import {addUsers, follow, setUsers, toggleIsFetching, unfollow} from "../../redux/usersReducer";
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
        />
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNum: state.usersPage.pageNum,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {addUsers, follow, unfollow, setUsers, toggleIsFetching})(UsersContainer)


