import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";
import HeaderContainer from "../Header/HeaderContainer";


function Layout() {
    return (
        <>
            <HeaderContainer />
            <Outlet />
            <Navbar />

        </>
    );
}

export {Layout};
