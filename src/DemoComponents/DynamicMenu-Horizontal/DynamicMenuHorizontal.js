import React from 'react';
import DtcDynamicMenuHorizontal from '../../SharedComponents/Dtc-DynamicMenu-Horizontal/DtcDynamicMenuHorizontal';
import { navLinkData } from './NavLinkData';
import DynamicMenuHorizontaRoute from './DynamicMenuHorizontaRoute';
import './dynamicMenuHorizontal.scss'
function DynamicMenuHorizontal(props) {
    return (
        <div className="dynamic-menu-horizontal">
            <DtcDynamicMenuHorizontal navLinkData={navLinkData}></DtcDynamicMenuHorizontal>
            <div className="dynamic-menu-horizontal__route" style={{ marginTop: '6rem',minHeight:'10rem' }}>
                <DynamicMenuHorizontaRoute></DynamicMenuHorizontaRoute>
            </div>
        </div>
    );
}

export default DynamicMenuHorizontal;