const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const ADD_USERS = 'ADD-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


const initialState = {
    users:[],
    pageNum: 100,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.id) {
                        return {...u,followed:false}
                    }
                    return u
                    }
                )
            }
        case SET_USERS:
            const newUsers = action.users.filter(newUser => !state.users.some(existingUser => existingUser.id === newUser.id));
            return { ...state, users: [...state.users, ...newUsers]};
        case ADD_USERS:
            return {
                ...state,
                pageNum: ++state.pageNum
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}



export const follow = (id) => ({type: FOLLOW, id});
export const unfollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const addUsers = () => ({type:ADD_USERS})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;