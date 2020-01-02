import React from 'react';
import { Switch,Route } from "react-router-dom";
import  Login  from '../components/Login';
import Contatos from '../components/Contato';

const routes = () =>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/contatos" component={Contatos}/>
            <Route path="*" component={Login}/>
        </Switch>

export default routes;