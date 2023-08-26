import './App.css';
import Header from "./modules/Header/Header";
import Navbar from "./modules/Navbar/Navbar";
import Dialogs from "./modules/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom"
import Profile from "./modules/Profile/Profile";
import {Layout} from "./modules/MainPage/Layout";

function App(props) {
    console.log(props)
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='Profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='Dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
