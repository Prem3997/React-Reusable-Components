import React from 'react';
import NumberFormatProps from './NumberFormatProps';
import NumberFormatLangProps from './NumberFormatLangProps';

function NumberFormatIndex(props) {
    return (
        <div className="number-format">
            <NumberFormatLangProps></NumberFormatLangProps>
            <NumberFormatProps></NumberFormatProps>
            
        </div>
    );
}

export default NumberFormatIndex;