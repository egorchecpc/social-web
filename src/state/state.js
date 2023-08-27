import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hey'},
                {id: 2, message: 'hey'},
                {id: 3, message: 'yoyo'},
                {id: 4, message: 'hey'},
                {id: 5, message: 'hey'}
            ],
            postNewText: '',
        },
        dialogsPage: {
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
    },
    subscribe(observer) {
        this._state._renderAgain = observer
    },
    getState() {
        return this._state;
    },
    _renderAgain() {
        console.log('ok')
    },

    dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            this._state._renderAgain(this._state)
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, text: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text});

export default store;