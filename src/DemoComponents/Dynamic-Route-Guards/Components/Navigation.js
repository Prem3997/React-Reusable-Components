import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Navigation.css';
import { path } from '../config/roles';

const Navigation = (props) =>{

    const history=useHistory();

    const handleLogout = () => {
		localStorage.removeItem('roles');
		history.push(`/${path.url}`);
	};
    return (
        <>
        <Navbar  expand="lg" bg="dark" variant="dark" className="navigation">
        <Navbar.Brand>
            <Link to={`/${path.url}/app`} style={{ color: '#fff' }}>
                Role-Based-Access-Control
            </Link>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            {props.routes.map((route) => (
                <Link
                    key={route.url}
                    className="nav-link"
                    to={`${props.path}${route.url}`}
                >
                    {route.title}
                </Link>
            ))}
              <Button className="nav-button" onClick={handleLogout}>Logout</Button> 
        </Nav>
          
          </Navbar.Collapse> 
           
    </Navbar>
    </>
    );
}

export default Navigation;