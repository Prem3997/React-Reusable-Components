import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function TimeInput(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var event={
        currentTarget:{
            name:props.name,
            type:'time',
            value:time
        }
    }
    props._handleChange(event)
    setSelectedDate(date);
  };

  return (
    <div style={{width:'200px'}}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id={props.name}
          label={props.label}
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    </div>
  );
}
