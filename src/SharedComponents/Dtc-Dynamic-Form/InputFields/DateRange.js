import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DateRange(props) {
  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date());
  const [selectedToDate, setSelectedToDate] = React.useState(new Date());
 
  // eslint-disable-next-line no-unused-vars
  
  const handleFromDateChange = (date) => {
    if(true){
        var event={
            currentTarget:{
                name:props.fromName,
                type:'date',
                value:date
            }
        }
        props._handleChange(event)
        setSelectedFromDate(date);
    }
    
  };
  const handleToDateChange = (date) => {
    
    if(date<=selectedFromDate){
        alert('Date should be greater than From Date')
    }

    else{
    var event={
        currentTarget:{
            name:props.toName,
            type:'date',
            value:date
        }
    }
    props._handleChange(event)
    setSelectedToDate(date);
    }
  };

  return (
    <div style={{width:'200px'}}>
        
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id={props.name}
          label='From'
          format="MM/dd/yyyy"
          value={selectedFromDate}
          fullWidth
          onChange={handleFromDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id={props.name}
          label='To'
          format="MM/dd/yyyy"
          value={selectedToDate}
          fullWidth
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    </div>
  );
}