import {connect} from "react-redux";
import {useEffect} from "react";
import Profile from "./Profile";
import {setUserProfile, toggleIsFetching} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import UsersAPI from "../../api/api";
import Preloader from "../common/Preloader/Preloader";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) userId = 29930;
    useEffect(() => {
        props.toggleIsFetching(true)
        UsersAPI.setUserProfileAPI(userId).then(data => {
            props.toggleIsFetching(false)
            props.setUserProfile(data);
        });
    }, [userId]);
    return <>{props.isFetching ? <Preloader/> : < Profile userProfile={props.userProfile}/>}</>

}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching
    }
}


export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer)