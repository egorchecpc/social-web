const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {
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

export default dialogsReducer