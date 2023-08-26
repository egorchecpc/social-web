import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet,Link} from "react-router-dom";


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Navbar />

        </>
    );
}

export {Layout};
