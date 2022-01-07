import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/style.css';
import 'assets/css/icons/and-icons.css';
import AlertSite from '../features/alert/alert';
import { history } from '../utils/helpers';
import { Router, Route } from 'react-router-dom';
import Home from '../pages/home/home';

function App() {
    return (
        <>
            <Router history={history}>
                <Route exact path="/" component={Home} />
            </Router>
            <AlertSite />
        </>
    );
}

export default App;
