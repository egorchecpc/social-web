import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        messageNewText: state.dialogsPage.messageNewText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateMessage: (text) => {
            let action = updateMessageActionCreator(text);
            dispatch(action);
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer;
