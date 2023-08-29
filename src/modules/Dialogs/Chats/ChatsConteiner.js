import {connect} from "react-redux";
import Chats from "./Chats";



const mapStateToProps = (state) => {
    return {
        chatData: state.dialogsPage.chatData
    }
}


const ChatsContainer = connect(mapStateToProps)(Chats)



export default ChatsContainer