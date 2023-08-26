import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './state/state'
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
const renderAgain = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter><App state={state} dispatch={store.dispatch.bind(store)}/></BrowserRouter>
        </React.StrictMode>
    );
}

renderAgain(store.getState());

store.subscribe(renderAgain);

reportWebVitals();

