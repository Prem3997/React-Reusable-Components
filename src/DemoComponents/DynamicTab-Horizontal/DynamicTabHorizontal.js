import React from 'react';
import DtcDynamicTabHorizontal from '../../SharedComponents/Dtc-DynamicTab-Horizontal/DtcDynamicTabHorizontal';
import { navLinkData } from './NavLinkData';
import DynamicTabHorizontaRoute from './DynamicTabHorizontaRoute';
import './dynamicTabHorizontal.scss'

function DynamicTabHorizontal(props) {
    return (
        <div className="dynamic-tab-horizontal">
            <DtcDynamicTabHorizontal navLinkData={navLinkData}></DtcDynamicTabHorizontal>
            <div className="dynamic-tab-horizontal__route">
                <DynamicTabHorizontaRoute></DynamicTabHorizontaRoute>
            </div>
        </div>
    );
}

export default DynamicTabHorizontal;