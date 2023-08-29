const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';


let initialState = {
    posts: [
        {id: 1, message: 'hey'},
        {id: 2, message: 'hey'},
        {id: 3, message: 'yoyo'},
        {id: 4, message: 'hey'},
        {id: 5, message: 'hey'}
    ],
    postNewText: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 13,
                message: state.postNewText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postNewText: ''
            }
        }
        case UPDATE_POST: {
            return {
                ...state,
                postNewText: action.text
            }
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, text: text});
export default profileReducer