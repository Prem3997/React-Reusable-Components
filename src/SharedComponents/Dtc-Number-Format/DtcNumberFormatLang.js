import React from 'react';
import './NumberFormatComp.scss'

const DtcNumberFormatLang = ({
    numberFormatLanguageProps: 
        { title,
          language,
          style, 
          currency, 
          currencyDisplay, 
          minimumIntegerDigits, 
          minimumFractionDigits,
          maximumFractionDigits,
          minimumSignificantDigits,
          maximumSignificantDigits,
          unit,
          unitDisplay,
          notation,
          compactDisplay,
          data
         }}) =>{
    
    let userLang=''
    if(language){
        userLang = language
    }
    else{
        userLang = navigator.language
    }
     
    
    return (
        
        <div className="dtc-number-format"> 
            <span>{title} : {new Intl.NumberFormat(userLang,{
                style:style,
                currency:currency,
                currencyDisplay:currencyDisplay,
                minimumIntegerDigits:minimumIntegerDigits,
                minimumFractionDigits:minimumFractionDigits,
                maximumFractionDigits:maximumFractionDigits,
                minimumSignificantDigits:minimumSignificantDigits,
                maximumSignificantDigits:maximumSignificantDigits,
                unit:unit,
                unitDisplay:unitDisplay,
                notation:notation,
                compactDisplay:compactDisplay}).format(data)}
            </span>
        </div>
        
    );
}

export default DtcNumberFormatLang;