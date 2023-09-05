import {useEffect} from "react";
import UsersAPI from "../api/api";
import {useParams} from "react-router-dom";


const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    posts: [
        {id: 1, message: 'hey'},
        {id: 2, message: 'hey'},
        {id: 3, message: 'yoyo'},
        {id: 4, message: 'hey'},
        {id: 5, message: 'hey'}
    ],
    postNewText: '',
    userProfile: null,
    isFetching: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 13, message: state.postNewText
            }
            return {
                ...state, posts: [...state.posts, newPost], postNewText: ''
            }
        }
        case UPDATE_POST: {
            return {
                ...state, postNewText: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {...state, userProfile: action.userProfile}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const setUserProfileThunkCreator = () => {
    return (dispatch) => {
        let {userId} = useParams();
        if (!userId) userId = 29930;
        useEffect(() => {
            dispatch(toggleIsFetching(true));
            UsersAPI.setUserProfileAPI(userId).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUserProfile(data));
            });
        }, [userId]);
    }
}
export default profileReducer