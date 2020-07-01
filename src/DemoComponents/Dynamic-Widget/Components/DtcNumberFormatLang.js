import React from 'react';

function DtcNumberFormatLang({
    data:
        {
            langProps: 
                {  title,
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
                }
        }
}) {
    console.log(data.langProps)
    console.log(data)
    let userLang=''
    if(language){
        userLang = language
    }
    else{
        userLang = navigator.language
    }
    return (
        <div>
            <div className="example"> 
             <span style={{fontSize:'1.5rem'}}>{title} : {new Intl.NumberFormat(userLang,{
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
        </div>
    );
}

export default DtcNumberFormatLang;

// import React from 'react';

// const DtcNumberFormatLang = ({
//     data:
//     {
//         langProps: 
//             {  title,
//                 language,
//                 style, 
//                 currency, 
//                 currencyDisplay, 
//                 minimumIntegerDigits, 
//                 minimumFractionDigits,
//                 maximumFractionDigits,
//                 minimumSignificantDigits,
//                 maximumSignificantDigits,
//                 unit,
//                 unitDisplay,
//                 notation,
//                 compactDisplay,
//                 data
//             }
//     }   
// }) =>{
//     console.log(data)
//     let userLang=''
//     if(language){
//         userLang = language
//     }
//     else{
//         userLang = navigator.language
//     }
     
    
//     return (
        
//         <div className="example"> 
//             <span style={{fontSize:'1.5rem'}}>{title} : {new Intl.NumberFormat(userLang,{
//                 style:style,
//                 currency:currency,
//                 currencyDisplay:currencyDisplay,
//                 minimumIntegerDigits:minimumIntegerDigits,
//                 minimumFractionDigits:minimumFractionDigits,
//                 maximumFractionDigits:maximumFractionDigits,
//                 minimumSignificantDigits:minimumSignificantDigits,
//                 maximumSignificantDigits:maximumSignificantDigits,
//                 unit:unit,
//                 unitDisplay:unitDisplay,
//                 notation:notation,
//                 compactDisplay:compactDisplay}).format(data)}
//             </span>
//         </div>
        
//     );
// }

// export default DtcNumberFormatLang;