import React, { useState, useEffect } from 'react'
import dxcFullIcon from './Assets/dxc_logo_hz_wht_rgb_300.png'
import dxcIcon from './Assets/icon.png'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Styles/navigation-bar-styles.scss'
import useMediaQuery from 'react-use-media-query-hook';
import { findWordTranslation } from '../../Locate/utils'

const DtcNavigationBar = (props) => {
    const [arrTab] = useState(props.navTabs)
    const isMobile = useMediaQuery('(max-width: 425px)');
    const [search, setSearch] = useState('')
    var DxcIcon = ''
    if (isMobile) {
        DxcIcon = dxcIcon
    }
    else {
        DxcIcon = dxcFullIcon
    }

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    let filteredarrTab = arrTab.filter((arr) => {
        return arr.menuName.toLowerCase().indexOf(search) !== -1 || arr.menuName.indexOf(search) !== -1
    })

    useEffect(() => {

        const menuBtn = document.querySelector('.menu-btn');
        const hamburger = document.querySelector('.menu-btn__burger');
        const nav = document.querySelector('.flex-column');
        const navItems = document.querySelectorAll('.navbar__link')

        let showMenu = false;
        menuBtn.addEventListener('click', toggleMenu);
        navItems.forEach(a => a.addEventListener('click', toggleMenu))

        function toggleMenu() {
            if (!showMenu) {

                hamburger.classList.add('open');
                nav.classList.add('open');
                navItems.forEach(item => item.classList.add('open'));
                showMenu = true;
            } else {
                hamburger.classList.remove('open')
                nav.classList.remove('open');
                navItems.forEach(item => item.classList.remove('open'));
                showMenu = false;
            }
        }
    }, [])



    return (
        <div>
            <div style={{ marginBottom: '54px' }}>
                <Navbar variant="dark" className='navbar fixed-top'>
                    <Navbar.Brand
                        as={Link}
                        to="/">
                        <img className="dxcicon"
                            src={DxcIcon}
                            alt="DXC">
                        </img>
                    </Navbar.Brand>
                    <Navbar.Brand
                        as={Link}
                        to="/">
                        <b className="main-title">
                            {findWordTranslation('React Reusuable Components')} 
                        </b>
                    </Navbar.Brand>
                    <div className="menu-btn">
                        <span className="menu-btn__burger"></span>
                    </div>
                </Navbar>


                <Navbar >

                    <Nav className="flex-column">
                        {props.searchButton === true ?
                            <div className="inputWithIcon">
                                <input type="text" className="text" value={search} onChange={updateSearch}
                                    placeholder={"Explore"}></input>
                                <img src={props.searchIcon.searchIcon} alt="Search" />
                            </div>
                            : null}
                        {filteredarrTab.map(a =>
                            <NavLink
                                key={a.menuUrl}
                                style={{ textDecoration: 'none' }}
                                exact
                                activeClassName="navbar__link--active"
                                className="navbar__link"
                                to={a.menuUrl}>
                                {findWordTranslation(a.menuName)}
                            </NavLink>

                        )}
                    </Nav>
                </Navbar>
                <Navbar variant="dark" className='navbar fixed-bottom'>
                    <Navbar.Brand as={Link} to='/'>
                        <span className="footer1" >
                            {findWordTranslation('Terms & Conditions')}
                        </span>
                        <span className="footer2" >
                            {findWordTranslation('Privacy Policy')}
                        </span>
                        <span className="footer3" >
                            © 2020 {findWordTranslation('DXC Technology')}
                        </span>
                    </Navbar.Brand>
                </Navbar>
            </div>
        </div>
    )
}

export default DtcNavigationBar;