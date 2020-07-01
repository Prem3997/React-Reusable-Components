import React,{ Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import { path } from './config/roles';

const Register = () => (
    <>
	<h2>Register</h2>
		<Link className="nav-link" to={`/${path.url}`}>
			Back to login
		</Link>
    </>
);
const ForgotPassword = () => (
    <>
    <h2>Forgot Password</h2>
		<Link className="nav-link" to={`/${path.url}`}>
			Back to login
		</Link>
    </>
);


const PublicRoutes = () =>{
    return (
        <Fragment>
		<Switch>
            <Route path={`/${path.url}/forgot-password`} component={ForgotPassword}/>
			<Route path={`/${path.url}/register`} component={Register} />
			<Route exact path={`/${path.url}`} component={Login} />
			<Route component={NotFound} />
		</Switch>
	</Fragment>
    );
}

export default PublicRoutes;