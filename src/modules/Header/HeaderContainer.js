import {connect} from "react-redux";
import {setUserAuthData} from "../../redux/authReducer";
import {useEffect} from "react";
import Header from "./Header";
import UsersAPI from "../../api/api";



const HeaderContainer = (props) => {
    useEffect(() => {
        UsersAPI.setUserAuthDataAPI().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                props.setUserAuthData(id, login, email);
            }

        });
    }, []);
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

export default connect(mapDispatchToProps, {setUserAuthData})(HeaderContainer)