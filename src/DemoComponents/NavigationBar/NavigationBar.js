import React from 'react'
import DtcNavigationBar from '../../SharedComponents/Dtc-Navigation-Bar/DtcNavigationBar'
import {navTabs, searchIcon, searchButton} from './NavigationBarProps'
export const NavigationBar = () => {
    return (
        <div>
            <DtcNavigationBar navTabs={navTabs} searchIcon={searchIcon} searchButton={searchButton}/>
        </div>
    )
}
