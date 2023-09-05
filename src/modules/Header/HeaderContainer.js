import {connect} from "react-redux";
import {authThunkCreator} from "../../redux/authReducer";
import Header from "./Header";



const HeaderContainer = (props) => {
    props.authThunkCreator(props.isAuth)
    return (
        <Header isAuth={props.isAuth} login={props.login}/>
    )
}

const mapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }
}

export default connect(mapDispatchToProps, {authThunkCreator})(HeaderContainer)