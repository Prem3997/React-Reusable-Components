import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './dtcBreadcrumb.scss'

const BreadCrumbNav = ({ breadCrumbNavData }) => {
    return (
        <div>
            <div >
                <Navbar collapseOnSelect expand="lg" className="breadcrumb-link" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{ height: '60px' }}>
                        {breadCrumbNavData.map((breadCrumbNavData,i) =>
                            <Nav className="mr-auto" key={i}>
                                {breadCrumbNavData.dropdownData === undefined ?
                                    <NavLink
                                        exact
                                        activeClassName="breadcrumb-nav-link--active"
                                        className="breadcrumb-nav-link"
                                        to={breadCrumbNavData.menuUrl}>{breadCrumbNavData.menuName}
                                    </NavLink>
                                    :
                                    <NavDropdown title={breadCrumbNavData.dropdownText} id="collapsible-nav-dropdown">
                                        {breadCrumbNavData.dropdownData.map((data,i) => (
                                            <NavLink key={i}
                                                exact
                                                activeClassName="breadcrumb-nav-link-dropdownMenu--active"
                                                className="breadcrumb-nav-link-dropdownMenu"
                                                to={data.menuUrl}> {data.menuName}
                                            </NavLink>
                                        ))}
                                    </NavDropdown>
                                }
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default BreadCrumbNav;