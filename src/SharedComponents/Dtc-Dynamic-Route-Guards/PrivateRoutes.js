import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { uniqBy } from 'lodash';
import { useHistory } from 'react-router-dom';
import { rolesConfig, path } from '../../DemoComponents/Dynamic-Route-Guards/config/roles'
import * as Routes from '../../DemoComponents/Dynamic-Route-Guards/Components/index'
import NotFound from '../../DemoComponents/Dynamic-Route-Guards/Components/NotFound'
import Navigation from '../../DemoComponents/Dynamic-Route-Guards/Components/Navigation'

const PrivateRoutes = (props) =>{
    const [allowedRoutes, setAllowedRoutes] = useState([])
    const history=useHistory(); 

    useEffect(() =>{
        let roles = JSON.parse(localStorage.getItem('roles'))
               
		if (roles) {
            roles = ['common', roles];
        
			let allowedRoutes = roles.reduce((acc, role) => {
				return [...acc, ...rolesConfig[role].routes];
			}, [])

			//For removing duplicate entries, compare with 'url'.
			allowedRoutes = uniqBy(allowedRoutes, 'url');
            setAllowedRoutes( allowedRoutes ); 
            console.log(allowedRoutes);              
        }
        else {
            console.log(roles,"Roles")
            history.push(`/${path.url}`)
        }
    },[history])


    return (
        <Fragment>

        <Navigation
            routes={allowedRoutes}
            path={props.match.path}
        />
        <Switch>
            {allowedRoutes.map((route) => (
                <Route
                    exact
                    key={route.url}
                    component={Routes[route.component]}
                    path={`${props.match.path}${route.url}`}
                />
            ))}
            <Route component={NotFound} />
        </Switch>
    </Fragment>
    );
}

export default PrivateRoutes;