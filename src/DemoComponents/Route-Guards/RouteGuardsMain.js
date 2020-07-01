import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import RouteGuards from './RouteGuards';
import PrivateRoute from '../../SharedComponents/Dtc-Route-Guards/PrivateRoute';

const RouteGuardsMain = () => {
return(
    <div>
    <Switch>
    <Route exact path='/route-guards-login' component={LoginForm}></Route>
    <PrivateRoute exact path='/route-guards' component={RouteGuards}></PrivateRoute>
    <PrivateRoute exact path='/route-guards/employee-data' component={RouteGuards}></PrivateRoute> 
    <PrivateRoute exact path='/route-guards/modify' component={RouteGuards}></PrivateRoute>
    </Switch>
    </div>
)
}

export default RouteGuardsMain;