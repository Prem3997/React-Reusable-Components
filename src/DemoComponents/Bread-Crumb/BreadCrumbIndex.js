import React from 'react';
import DtcBreadCrumb from '../../SharedComponents/Dtc-Bread-Crumb/DtcBreadCrumb';
import { breadCrumbNavData, breadCrumbNameMap, breadCrumbSeperator, breadCrumbMaxItemsToDisplay } from './BreadCrumbProps';
import BreadCrumbRoute from './BreadCrumbRoute';
import './breadcrumb.scss'
function BreadCrumbIndex(props) {
    return (
        <div className="breadcrumb-main">
            <DtcBreadCrumb 
                    breadCrumbNavData={breadCrumbNavData} 
                    breadCrumbNameMap={breadCrumbNameMap} 
                    breadCrumbSeperator={breadCrumbSeperator} 
                    breadCrumbMaxItemsToDisplay={breadCrumbMaxItemsToDisplay}
            ></DtcBreadCrumb>
            <div className="breadcrumb-main__route">
                <BreadCrumbRoute></BreadCrumbRoute>
            </div>
        </div>
    );
}

export default BreadCrumbIndex;