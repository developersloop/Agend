import React from 'react';
import { Switch,Route } from "react-router-dom";
import { Table } from '../components/Table';
import  Login  from '../components/Login';


const routes = () =>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            {/* <Route path="/register" component={Register}/> */}
            <Route path="*" component={Login}/>
        </Switch>

export default routes;