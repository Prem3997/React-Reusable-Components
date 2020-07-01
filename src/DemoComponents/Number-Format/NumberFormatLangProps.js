import React, { useState } from 'react';
import DtcNumberFormatLang from '../../SharedComponents/Dtc-Number-Format/DtcNumberFormatLang';
import { TextField } from '@material-ui/core';
import './style.scss'

function NumberFormatLangProps(props) {
     const [data,setData] = useState('')

    const formatting = (e) =>{
        setData(e.target.value)
    }
    
    const thousandDecimalSeparator = {
        title:'Thousand and decimal separator',
        data:data,
    }
    const numberFormatWithCurrency = {
        title:'Currency Number Format',
        language:"ja-JP", //ja-JP //fr //kn
        data:data,
        style:'currency',
        currency:'JPY', //JPY //EUR //INR
        currencyDisplay:'symbol' //symbol:default //code //name
    }
    const unitNumberFormat = {
        title:'Unit number format',
        data:data,
        style:'unit',
        unit:'mile-per-hour',
        unitDisplay:'short'
    }
    const notationNumberFormat = {
        title:'Notation number format',
        data:data,
        notation: "scientific" 
    }
    const notationWithCompactNumberFormat = {
        title:'Notation with "compact" number format',
        data:data,
        notation: "compact",
        compactDisplay: "short"
    }
    const integerFractionSignificantDigits = {
        title:'Number Format with integer,fraction and significant digits',
        minimumIntegerDigits:3,
        minimumFractionDigits:2,
        maximumFractionDigits:4,
        //minimumSignificantDigits:5,
        //maximumSignificantDigits:6,
        data:data,
    }
    return (
        <div>
            <h4 className="number-format-example">
            Format number based on Language </h4>
            <div style={{marginTop:'2rem'}}><TextField  onChange={formatting}></TextField></div>
           
            
            <DtcNumberFormatLang numberFormatLanguageProps={thousandDecimalSeparator} ></DtcNumberFormatLang>
            <DtcNumberFormatLang numberFormatLanguageProps={numberFormatWithCurrency}></DtcNumberFormatLang>
            <DtcNumberFormatLang numberFormatLanguageProps={unitNumberFormat} ></DtcNumberFormatLang>
            <DtcNumberFormatLang numberFormatLanguageProps={notationNumberFormat}></DtcNumberFormatLang>
            <DtcNumberFormatLang numberFormatLanguageProps={notationWithCompactNumberFormat}></DtcNumberFormatLang>
            <DtcNumberFormatLang numberFormatLanguageProps={integerFractionSignificantDigits}></DtcNumberFormatLang>
        </div>
    );
}

export default NumberFormatLangProps;