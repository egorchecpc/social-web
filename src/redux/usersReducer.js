const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const ADD_USERS = 'ADD-USERS'

const initialState = {
    users:[],
    pageNum: 100,
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
        default:
            return state;
    }
}



export const followAC = (id) => ({type: FOLLOW, id});
export const unfollowAC = (id) => ({type: UNFOLLOW, id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const addUsersAC = () => ({type:ADD_USERS})
export default usersReducer;