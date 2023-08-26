import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom";


function MainPage() {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    );
}

export default MainPage;
