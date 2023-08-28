import './App.css';
import Dialogs from "./modules/Dialogs/Dialogs";
import {Routes, Route} from "react-router-dom"
import Profile from "./modules/Profile/Profile";
import {Layout} from "./modules/MainPage/Layout";


function App(props) {
    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='dialogs' element={<Dialogs/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
