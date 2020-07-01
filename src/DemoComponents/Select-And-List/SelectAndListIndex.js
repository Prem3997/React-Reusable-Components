import React from 'react';
import DtcSelectAndList from '../../SharedComponents/Dtc-Select-And-List/DtcSelectAndList';
import { SelectAndListData, selectListProps, images } from './SelectAndListProps';

const SelectAndListIndex =() =>{
    return (
        <div>
           <DtcSelectAndList SelectAndListData={SelectAndListData}
           selectedList={selectListProps} images={images}/> 
        </div>
    );
}

export default SelectAndListIndex;