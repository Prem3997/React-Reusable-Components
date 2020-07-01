import React from 'react'
import DynamicTabVerticalRoute from './DynamicTabVerticalRoute'
import { DtcDynamicTabVertical } from '../../SharedComponents/Dtc-DynamicTab-Vertical/DtcDynamicTabVertical'
import { navTabs } from './NavigationBarProps'
import './DynamicVerticalStyles.css'
export const DynamicTabVertical = () => {
    return (
        <div>
            <DtcDynamicTabVertical
                navTabs={navTabs}
            />
            <div className="navTabs-Style">
                <DynamicTabVerticalRoute
                />
            </div>
        </div>
    )
}
