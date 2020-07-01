import React from 'react';
import DtcNumberFormatComp from '../../SharedComponents/Dtc-Number-Format/DtcNumberFormatComp';
import { TextField } from '@material-ui/core';
import './style.scss';

function NumberFormatProps(props) {
   

    const limit = (val, max) => {
        if (val.length === 1 && val[0] > max[0]) {
            val = '0' + val;
        }

        if (val.length === 2) {
            if (Number(val) === 0) {
                val = '01';

                //this can happen when user paste number
            } else if (val > max) {
                val = max;
            }
        }

        return val;
    }
    const cardExpiry = (val) => {
        let month = limit(val.substring(0, 2), '12');
        let date = limit(val.substring(2, 4), '31');

        return month + (date.length ? '/' + date : '');
    }

    const formatCurrencyText = {
        title:'Prefix and thousand separator and groupStyle : Format currency as text',
        thousandSeparator:true,
        thousandsGroupStyle:'wan', //default:thousand //lakh //wan
        value:24569816678,
        displayType:'text',
        prefix:'$'
    }
    const formatCreditCard = {
        title:' Format with pattern : Format credit card as text',
        value:'$23,234,235.56676757',
        isNumericString:true,
        displayType:'text',
        format:"#### #### #### ####"
    }
    const formatCurrencyInput = {
        title:'Prefix and thousand separator : Format currency in input',
        thousandSeparator:true,
        displayType:'input',
        suffix:' /-',
        className:"some",        
    }
    const customThousandSeperator = {
        title : 'Custom thousand separator : Format currency in input',
        thousandSeparator:'.',
        decimalSeparator:',',
        prefix:'$'
    }
    const formatWithPattern = {
        title:'Format with pattern : Format credit card in an input',
        format:"#### #### #### ####"
    }
    const formatWithMask = {
        title:'Format with mask : Format credit card in an input',
        format:"#### #### #### ####",
        mask:"_"
    }
    const formatWithMaskArray = {
        title:'Format with mask :  Format with mask as array',
        format:"##/##/##",
        placeholder:"DD/MM/YY",
        mask:['D','D','M', 'M', 'Y', 'Y']
    }
    const customFormatMethod = {
        title:'Custom format method  : Format credit card expiry time',
        format:cardExpiry,
    }
    const formatPhoneNum = {
        title:'Format with pattern : Format phone number',
        format:"+91 #####-#####",
        mask:"_"
    }
    const showMaskonEmptyInput = {
        title:'Show mask on empty input',
        format:"+91 ##### #####",
        mask:"_",
        allowEmptyFormatting:true
    }
    const customInputs = {
        title:'Custom Inputs',
        customInput:TextField
    }
    const formatWithDecimal = {
        title:'Format with Integer and decimal',
        decimalScale:4,
        fixedDecimalScale:true,
        allowNegative:false,
        allowLeadingZeros:true,
        //defaultValue:0,
        type:'text' //text //tel //password
    }
    
    
    return (
        <div>
            <h4  className="number-format-example">
                Format number based on user choice
            </h4>
            <DtcNumberFormatComp numberFormatProps = {formatCurrencyText}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatCreditCard}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatCurrencyInput}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {customThousandSeperator}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatWithPattern}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatWithMask}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {customFormatMethod}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatWithMaskArray}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatPhoneNum}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {showMaskonEmptyInput}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {customInputs}></DtcNumberFormatComp>
            <DtcNumberFormatComp numberFormatProps = {formatWithDecimal}></DtcNumberFormatComp>
            
            
        </div>
    );
}

export default NumberFormatProps;