import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import PublicRoutes from './PublicRoutes';
import { Container, Row, Col } from 'react-bootstrap';
import PrivateRoutes from '../../SharedComponents/Dtc-Dynamic-Route-Guards/PrivateRoutes';
import { path } from './config/roles';

const AppMain = () => {
    const history=useHistory();

    const authentication = () =>(
         localStorage.getItem('roles') ?
        <Redirect to={`/${path.url}/app`} /> : 
        <PublicRoutes/>     
         )
    
    return (
        <div>      
            <Container fluid>
				<Row>
					<Col>      
                       <BrowserRouter history={history}>
                            <Switch>
                                <Route path={`/${path.url}/app`} component={PrivateRoutes} /> 
                                <Route path={`/${path.url}`} render={authentication} />
                            </Switch> 
                       </BrowserRouter>
                    
					</Col>
				</Row>
			</Container>
        </div>
    );
}

export default AppMain;