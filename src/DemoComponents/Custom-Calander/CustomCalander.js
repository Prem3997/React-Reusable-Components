import React from 'react'
import {
    editableDateInputs,
    dateDisplayFormat,
    weekStartsOn,
    monthDisplayFormat,
    weekdayDisplayFormat,
    dayDisplayFormat,
    showMonthArrow,
    rangeColor

} from './CustomCalanderProps'
import { DtcCustomCalander } from '../../SharedComponents/Dtc-Custom-Calander/DtcCustomCalander'
export const CustomCalander = () => {
    return (
        <div>
            <DtcCustomCalander
                editableDateInputs={editableDateInputs}
                dateDisplayFormat={dateDisplayFormat}
                weekStartsOn={weekStartsOn}
                monthDisplayFormat={monthDisplayFormat}
                weekdayDisplayFormat={weekdayDisplayFormat}
                dayDisplayFormat={dayDisplayFormat}
                showMonthArrow={showMonthArrow}
                rangeColor={rangeColor}
            />
        </div>
    )
}
