import MyPosts from "./MyPosts";
import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";


function MyPostsContainer(props) {
    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = (text) => {
        let action = updatePostActionCreator(text);
        props.dispatch(action);

    }

    return (<MyPosts addPost={addPost}
                     updatePost={onPostChange}
                     posts={props.profilePage.posts}
                     postNewText={props.profilePage.postNewText}/>)
}

export default MyPostsContainer;
