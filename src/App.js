import './App.css';
import Header from "./modules/Header/Header";
import Navbar from "./modules/Navbar/Navbar";
import Dialogs from "./modules/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom"
import Profile from "./modules/Profile/Profile";
import {Layout} from "./modules/MainPage/Layout";


function App(props) {
    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='profile' element={<Profile profilePage={props.state.profilePage}
                                                            dispatch={props.dispatch}/>}/>
                    <Route path='dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                            dispatch={props.dispatch}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
