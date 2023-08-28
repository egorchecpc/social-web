import {connect} from "react-redux";
import Users from "./Users";



const mapStateToProps = (state) => {
    return {
        userData: state.dialogsPage.userData
    }
}


const UsersContainer = connect(mapStateToProps)(Users)



export default UsersContainer