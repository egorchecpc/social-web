import {useEffect} from "react";
import UsersAPI from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}



export const setUserAuthData = (id, login, email) => ({type: SET_USER_DATA, data:{id, login, email}});
export const authThunkCreator = (isAuth) => {
    return (dispatch) => {
        useEffect(() => {
            UsersAPI.setUserAuthDataAPI().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setUserAuthData(id, login, email));
                }

            });
        }, [isAuth]);
    }
}
export default authReducer;