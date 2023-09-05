import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfileThunkCreator} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";


function ProfileContainer(props) {
    props.setUserProfileThunkCreator()
    return <>{props.isFetching ? <Preloader/> : <Profile userProfile={props.userProfile}/>}</>

}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching
    }
}


export default connect(mapStateToProps, {setUserProfileThunkCreator})(ProfileContainer)