import {useEffect} from "react";
import UsersAPI from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const ADD_USERS = 'ADD-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    pageNum: 100,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        case SET_USERS:
            const newUsers = action.users.filter(newUser => !state.users.some(existingUser => existingUser.id === newUser.id));
            return {...state, users: [...state.users, ...newUsers]};
        case ADD_USERS:
            return {
                ...state,
                pageNum: ++state.pageNum
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const follow = (id) => ({type: FOLLOW, id});
export const unfollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const addUsers = () => ({type: ADD_USERS})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const setUsersThunkCreator = (pageNum) => {
    return (dispatch) => {
        useEffect(() => {
            dispatch(toggleIsFetching(true))
            UsersAPI.setUsersAPI(pageNum).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items));
            });
        }, [pageNum]);
    }
}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UsersAPI.unfollowAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        UsersAPI.followAPI(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;