import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/detail" exact component={DetailPage} />

        </Switch>
    </BrowserRouter>
)

export default Root;