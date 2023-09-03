import {connect} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

function ProfileContainer(props) {
    let { userId } = useParams();
    if(!userId) userId=29629;
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data);
            });
    }, []);
    return (
        <Profile userProfile={props.userProfile}/>
    )
}
const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)