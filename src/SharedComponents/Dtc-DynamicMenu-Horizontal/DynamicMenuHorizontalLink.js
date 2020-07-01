import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HorizontalMenu.scss'

const DynamicMenuHorizontalLink = ({ menuData }) => {
    return (
        <div >
            <Navbar collapseOnSelect expand="sm" className="horizontal-menu-link" >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="navbar-height">
                    {menuData.map((menu,i) =>                         
                    <Nav className="mr-auto" key={i} >
                         {menu.dropdownData=== undefined ?                            
                            <NavLink
                            exact
                            activeClassName="navbar__link-horz-menu--active"
                            className="navbar__link-horz-menu"
                            to={`/dynamicMenu-horizontal/${menu.menuUrl}`}><span style={{margin:'1rem'}} className={menu.icon}></span>{menu.menuName}
                            </NavLink>
                            :
                            <NavDropdown title={menu.dropdownText} id="collapsible-nav-dropdown">
                                {menu.dropdownData.map((data,i)=>(                                
                               <NavLink key={i}
                               exact
                               activeClassName="navbar__link-horz-dropdownMenu--active"
                               className="navbar__link-horz-dropdownMenu"
                               to={`/dynamicMenu-horizontal/${data.menuUrl}`}><span className={data.icon} style={{margin:'1rem'}}> {data.menuName}</span>
                           </NavLink>                          
                           ))}
                       </NavDropdown>
                         }                               
                    </Nav>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default DynamicMenuHorizontalLink;