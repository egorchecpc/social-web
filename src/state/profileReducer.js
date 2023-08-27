
const ADD_POST='ADD-POST';
const UPDATE_POST='UPDATE-POST';

export const profileReducer = (state,action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 13,
                message: state.postNewText
            }
            state.posts.push(newPost);
            state.postNewText = '';
            return state;
        case UPDATE_POST:
            state.postNewText = action.text;
            return state;
        default: return state;
    }
}

export default profileReducer