import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator,updatePostActionCreator} from "../../../state/state";


function MyPosts(props) {

    let newPostElement = React.createRef();
    let posts = props.posts.map((post) => <Post id={post.id} message={post.message}/>);

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let action = updatePostActionCreator(newPostElement.current.value);
        props.dispatch(action);

    }

    return (
        <div className={s.posts}>
            <div className={s.posts__adder}>
                <div className={s.posts__title}>
                    My posts
                </div>
                <div className={s.posts__add}>
                    <div className={s.posts__input}>
                        <input ref={newPostElement} onChange={onPostChange} value={props.postNewText} type="text"
                               name="input" placeholder="your news..."/>
                    </div>
                    <button onClick={addPost} className={s.posts__btn}>Send</button>
                </div>
            </div>
            <div className={s.posts__list}>
                <div className={s['all-posts']}>
                    {posts}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
