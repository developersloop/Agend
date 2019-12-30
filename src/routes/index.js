import React from 'react';
import { Switch,Route } from "react-router-dom";
import  Login  from '../components/Login';


const routes = () =>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            {/* <Route path="/users" component={}/> */}
            <Route path="*" component={Login}/>
        </Switch>

export default routes;