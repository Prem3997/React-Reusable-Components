import React from 'react';
import {images,componentsVisibility,users, displayMainData, displayAdditionalData, searchBoxPlaceholder} from './PickTableData';
import DtcPickTable from '../../SharedComponents/Dtc-Pick-Table/DtcPickTable';

function PickTableIndex(props) {
    
    return (
        <div>
           <DtcPickTable 
                pickTableData={users} 
                images={images}
                componentsVisibility={componentsVisibility}
                displayMainData={displayMainData}
                displayAdditionalData={displayAdditionalData}
                searchBoxPlaceholder={searchBoxPlaceholder}
                ></DtcPickTable> 
        </div>
    );
}

export default PickTableIndex;