## Library/PackageName
"react-date-range"

## Library/PackageVersion
"react-date-range": "^1.0.3",

## Library/PackageLicense
OpenSource- React Library

## Installation guidelines/steps

Copy the Dtc-Custom-Calander Folder <br>
Install the packages react-date-range <br>

## Sample Configuration JSON FILE
export const editableDateInputs=false <br> 
export const dateDisplayFormat="dd-MMMM-yyyy" <br>
export const weekStartsOn=0<br>
export const monthDisplayFormat="MMM-yyyy"<br>
export const weekdayDisplayFormat="EEE"<br>
export const dayDisplayFormat='d'<br>
export const showMonthArrow=true<br>
export const rangeColor='black'<br>

 //-------------------------------
// Calendar year
//-------------------------------
//  y	44, 1, 1900, 2017
// yo	44th, 1st, 0th, 17th
// yy	44, 01, 00, 17	
// yyy	044, 001, 1900, 2017	
// yyyy	0044, 0001, 1900, 2017
//-------------------------------
// Month
//-------------------------------
// M	1, 2, ..., 12	
// Mo	1st, 2nd, ..., 12th	
// MM	01, 02, ..., 12	
// MMM	Jan, Feb, ..., Dec	
// MMMM	January, February, ..., December
//-------------------------------
// Day
//-------------------------------
// d	1, 2, ..., 31	
// do	1st, 2nd, ..., 31st	7
// dd	01, 02, ..., 31
//-------------------------------
// Week
//-------------------------------
// EEE	Mon, Tue, Wed, ..., Su	
// EEEE	Monday, Tuesday, ..., Sunday
// EEEEE	M, T, W, T, F, S, S	
// EEEEEE	Mo, Tu, We, Th, Fr, Su, Sa


## How to use Custom-Calander
import the DtcCustomCalander
import {
    editableDateInputs,
    dateDisplayFormat,
    weekStartsOn,
    monthDisplayFormat,
    weekdayDisplayFormat,
    dayDisplayFormat,
    showMonthArrow,
    rangeColor

} from './CustomCalanderProps'<br>
send the fields as props <br>
< DtcCustomCalander
                editableDateInputs={editableDateInputs}
                dateDisplayFormat={dateDisplayFormat}
                weekStartsOn={weekStartsOn}
                monthDisplayFormat={monthDisplayFormat}
                weekdayDisplayFormat={weekdayDisplayFormat}
                dayDisplayFormat={dayDisplayFormat}
                showMonthArrow={showMonthArrow}
                rangeColor={rangeColor}
/>
