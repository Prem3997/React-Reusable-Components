import React,{useState} from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import useMediaQuery from 'react-use-media-query-hook';
import './DtcCustomCalenarStyles.css'

export const DtcCustomCalander = (props) => {
    const isMobile = useMediaQuery('(max-width: 425px)');
    var direction=''
    if(isMobile){
        direction='vertical'
    }
    else{
        direction='horizontal'
    }
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
    const onChangeDate=(item)=>{
        setState([item.selection])
    }
    return (
        <div className='calendar-layout'>
            <DateRangePicker
                editableDateInputs={props.editableDateInputs}
                onChange={onChangeDate}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                rangeColors={[props.rangeColor]}
                months={2}
                ranges={state}
                direction={direction}
                dateDisplayFormat={props.dateDisplayFormat}
                weekStartsOn={props.weekStartsOn}
                monthDisplayFormat={props.monthDisplayFormat}
                weekdayDisplayFormat={props.weekdayDisplayFormat}
                dayDisplayFormat={props.dayDisplayFormat}
                showMonthArrow={props.showMonthArrow}
                />
        </div>
    )
}
