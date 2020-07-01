# Number Format based on browser locale:

## Library/PackageName
NA

## Library/PackageVersion
NA

## Library/PackageLicense
NA

## Installation guidelines/steps

Copy the Dtc-Number-Format Folder

## How to use 

1.Copy the Dtc-Number-Format folder.
2.numberFormatLanguageProps has to be passed as props to DtcNumberFormatLang.js file (refer  NumberFormatLangProps.js file config file located in src/DemoComponents/NumberFormat/ NumberFormatLangProps) 
    <DtcNumberFormatLang 
        numberFormatLanguageProps={numberFormatLanguageProps}>
    </DtcNumberFormatLang>
3.numberFormatLanguageProps has following set of configuration parameters :
 - title,
 - language :language code  Ex: ja-JP, fr
                    *if not specified by default it takes browser language
 - style : decimal / currency / percent / unit
 - currency : ISO 4217 currency codes  Ex: USD / EUR
 - currencyDisplay : symbol (default) /code /name
 - minimumIntegerDigits : Possible values are from 1 to 21
 - minimumFractionDigits : Possible values are from 0 to 20
 - maximumFractionDigits : Possible values are from 0 to 20
 - minimumSignificantDigits : Possible values are from 1 to 21
 - maximumSignificantDigits :  Possible values are from 1 to 21
 - unit : Ex- mile-per-hour, litres
 - unitDisplay : long / short (default) / narrow
 - notation : standard (default)/ scientific / engineering / compact
 - compactDisplay : short(default) / long *used only when notation is ‘compact’
 - data

## Sample Configuration file

    (refer : https://github.dxc.com/ay7/dtc-react-reusable-component/blob/dev/src/DemoComponents/Number-Format/NumberFormatLangProps.js)

### 1.Data to be disaplyed based on browser language (if language parameter is not specified, by default it takes browser language)
    const numberFormatLanguageProps = {
            title:'Unit number format',
            data:data,
            style:'unit',
            unit:'mile-per-hour',
            unitDisplay:'short'
        }
### 2.Data to be displayed based on user's language choice 
    const numberFormatLanguageProps = {
            title:'Unit number format',
            language:"de-DE",
            data:data,
            style:'unit',
            unit:'mile-per-hour',
            unitDisplay:'short'
        }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

# Number Format based on user choice:

## Library/PackageName
react-number-format

## Library/PackageVersion
"react-number-format": "^4.4.1",

## Library/PackageLicense
MIT

## Installation guidelines/steps

Copy the Number-Format Folder 
Install the package react-number-format

## How to use 
1.Copy the Dtc-Number-Format folder.
2.Install react-number-format
3.Copy Dtc-Number-Format folder
4.numberFormatProps has to pe passed as props to DtcNumberFormatComp.js file (https://github.dxc.com/ay7/dtc-react-reusable-component/blob/dev/src/SharedComponents/Dtc-Number-Format/DtcNumberFormatComp.js) 
    <DtcNumberFormatComp 
        numberFormatProps = {numberFormatProps}>
    </DtcNumberFormatComp>
5.numberFormatProps has following set of configuration parameters:
 - title
 - thousandSeparator : mixed- single character string or boolean (Add thousand separators on number)
 - decimalSeparator : single character string (Support decimal point on a number)
 - thousandsGroupStyle : One of ['thousand', 'lakh', 'wan’] 
                        ( It supports 3 types : 
                            thousand - 123,456,789, 
                            lakh - 12,34,56,789,
                            wan - 1,2345,6789
                        )
 - decimalScale : number
 - fixedDecimalScale : Boolean (If true it add 0s to match given decimalScale)
 - allowNegative : Boolean (allow negative numbers (Only when format option is not provided)
 - allowEmptyFormatting :Boolean (Apply formatting to empty inputs)
 - allowLeadingZeros : Boolean (Allow leading zeros at beginning of number)
 - prefix : String (ex : $) (Add a prefix before the number)
 - suffix : String (ex : /-) (Add a suffix after the number)
 - value : Number or String (Value to the number format. It can be a float number, or formatted string.  If value is string representation of number (unformatted), isNumericString props should be passed as true.)
 - defaultValue : Number or String (Value to the used as default value if value is not provided. The format of defaultValue should be similar as defined for the value.)
 - displayType : String: text / input (If input it renders a input element where formatting happens as you input characters. If text it renders it as a normal text in a span formatting the given value)
 - type : One of ['text', 'tel', 'password’] (Input type attribute)
 - format : String : Hash based ex (#### #### #### ####) or Function (If format given as hash string allow number input inplace of hash. If format given as function, component calls the function with unformatted number and expects formatted number.)
 - mask : String (ex : _) (If mask defined, component will show non entered placed with masked value.)
 - customInput : Component Reference (This allow supporting custom inputs with number format.)
 - onValueChange : (values) => {} (onValueChange handler accepts values object)

*Other than this it accepts all the props which can be given to a input or span based on displayType you selected.*

## Sample Configuration file

 (refer : https://github.dxc.com/ay7/dtc-react-reusable-component/blob/dev/src/DemoComponents/Number-Format/NumberFormatProps.js )

 const numberFormatProps = {
        title:'Prefix and thousand separator and groupStyle : Format currency as text',
        thousandSeparator:true,
        thousandsGroupStyle:'thousand',
        value:24569816678,
        displayType:'text',
        prefix:'$'
    }



