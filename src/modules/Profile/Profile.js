import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
       <div className={s.profile}>
            <ProfileInfo />
           <MyPosts posts={props.profilePage.posts} postNewText={props.profilePage.postNewText} dispatch={props.dispatch}/>
       </div>
    );
}

export default Profile;
