import React from 'react';
import CustomDialogProps from './CustomDialogProps';
import CustomDialogProps1 from './CustomDialogProps1';
import CustomDialogProps2 from './CustomDialogProps2';
import CustomDialogProps3 from './CustomDialogProps3';
import './customDialog.scss'

function CustomDialogIndex(props) {
    return (
        <div className="custom-dialog">
            <CustomDialogProps></CustomDialogProps>
            <CustomDialogProps1></CustomDialogProps1>
            <CustomDialogProps2></CustomDialogProps2>
            <CustomDialogProps3></CustomDialogProps3>
        </div>
    );
}

export default CustomDialogIndex;