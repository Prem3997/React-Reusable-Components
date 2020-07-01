import React from 'react';
import NumberFormat from 'react-number-format';
import './NumberFormatComp.scss'


const DtcNumberFormatComp = ({ 
    numberFormatProps:{
        title,
        thousandSeparator,
        decimalSeparator,
        thousandsGroupStyle,
        decimalScale,
        fixedDecimalScale,
        allowNegative,
        allowEmptyFormatting,
        allowLeadingZeros,
        prefix,
        suffix,
        value,
        defaultValue,
        isNumericString,
        displayType,
        type,
        format,
        mask,
        placeholder,
        customInput,
        onValueChange,
        onChange
    }}) => {

    return (
        <div>
            <div className="dtc-number-format">
                <h3>
                    {title}
                </h3>

                <NumberFormat
                    thousandSeparator={thousandSeparator}
                    decimalSeparator={decimalSeparator}
                    thousandsGroupStyle={thousandsGroupStyle}
                    decimalScale={decimalScale}
                    fixedDecimalScale={fixedDecimalScale}
                    allowNegative={allowNegative}
                    allowEmptyFormatting={allowEmptyFormatting}
                    allowLeadingZeros={allowLeadingZeros}
                    prefix={prefix}
                    suffix={suffix}
                    value={value}
                    defaultValue={defaultValue}
                    isNumericString={isNumericString}
                    displayType={displayType}
                    type={type}
                    format={format}
                    mask={mask}
                    placeholder={placeholder}
                    customInput={customInput}
                    onValueChange={onValueChange}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

export default DtcNumberFormatComp;