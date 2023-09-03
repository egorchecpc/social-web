import './App.css';
import Dialogs from "./modules/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom"
import Profile from "./modules/Profile/Profile";
import {Layout} from "./modules/MainPage/Layout";
import UsersContainer from "./modules/Users/UsersContainer";
import ProfileContainer from "./modules/Profile/ProfileContainer";




function App(props) {
    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='users' element={<UsersContainer/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
