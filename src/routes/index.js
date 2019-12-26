import React from 'react';
import { Switch,Route } from "react-router-dom";
import App from '../App'
import  Login  from '../components/Login';


const routes = () =>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="*" component={Login}/>
        </Switch>

export default routes;