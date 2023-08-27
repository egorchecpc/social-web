const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


let initialState = {
    userData: [
        {id: 1, name: 'egor'},
        {id: 2, name: 'vika'},
        {id: 3, name: 'vita'},
    ],
    messages: [
        {id: 1, text: 'Hey man, i love u'},
        {id: 2, text: 'w'},
        {id: 3, text: 'U so pretty'},
    ],
    messageNewText: '',
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 13, text: state.messageNewText
            }
            state.messages.push(message);
            state.messageNewText = '';
            return state;
        case UPDATE_MESSAGE:
            state.messageNewText = action.text
            return state;
        default: return state;
    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text});
export default dialogsReducer