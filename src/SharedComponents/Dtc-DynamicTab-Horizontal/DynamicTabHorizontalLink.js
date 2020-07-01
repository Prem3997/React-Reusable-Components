import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HorizontalTab.scss'
const DynamicTabHorizontalLink = ({tabData}) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="sm" className="horizontal-tab-link">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navbar-height">
                        <Nav className="mr-auto" >
                            {tabData.map((data,i) => (                               
                                <NavLink key={i}
                                    exact
                                    activeClassName="navbar__link-horz--active"
                                    className="navbar__link-horz"
                                    to={`/dynamictab-horizontal/${data.menuUrl}`}>{data.menuName}
                                </NavLink>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>
    );
}

export default DynamicTabHorizontalLink;