import {connect} from "react-redux";
import {addUsers, followThunkCreator, setUsersThunkCreator, unfollowThunkCreator} from "../../redux/usersReducer";
import Users from "./Users";


function UsersContainer(props) {
    props.setUsersThunkCreator(props.pageNum)
    const showMoreUsers = () => props.addUsers();
    return (<Users users={props.users}
                   showMoreUsers={showMoreUsers}
                   isFetching={props.isFetching}
                   followingInProgress={props.followingInProgress}
                   unfollowThunkCreator={props.unfollowThunkCreator}
                   followThunkCreator={props.followThunkCreator}
    />)
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageNum: state.usersPage.pageNum,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    addUsers, setUsersThunkCreator, unfollowThunkCreator, followThunkCreator
})(UsersContainer)


