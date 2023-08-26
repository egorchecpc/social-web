const ADD_POST='ADD-POST'
const UPDATE_POST='UPDATE-POST'
const ADD_MESSAGE='ADD-MESSAGE'
const UPDATE_MESSAGE='UPDATE-MESSAGE'

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

        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_POST) {
            this._updatePost(action.text)
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage()
        } else if (action.type === UPDATE_MESSAGE) {
           this._updateMessage(action.text)
        }
    },
    _addPost() {
        let newPost = {
            id: 13,
            message: this._state.profilePage.postNewText
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.postNewText = ''
        this._state._renderAgain(this._state)
    },
    _updatePost(text) {
        this._state.profilePage.postNewText = text
        this._state._renderAgain(this._state)
    },
    _addMessage() {
        let message = {
            id: 13,
            text: this._state.dialogsPage.messageNewText
        }
        this._state.dialogsPage.messages.push(message)
        this._state.dialogsPage.messageNewText = ''
        this._state._renderAgain(this._state)
    },
    _updateMessage(text) {
        this._state.dialogsPage.messageNewText = text
        this._state._renderAgain(this._state)
    }
}

export const addPostActionCreator = () => ({
    type:ADD_POST
})

export const updatePostActionCreator = (text) => ({
    type:UPDATE_POST,
    text:text
})
export const addMessageActionCreator = () => ({
    type:ADD_MESSAGE
})
export const updateMessageActionCreator = (text) => ({
    type:UPDATE_MESSAGE,
    text:text
})
export default store