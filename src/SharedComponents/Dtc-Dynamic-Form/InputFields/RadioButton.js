import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButton(props) {
  const [value, setValue] = React.useState(props.defaultKey);

  const handleChange = (event) => {
    props._handleChange(event)
    setValue(event.target.value);
  };

  return (
    <div style={{marginLeft:'-120px'}}>
      <br></br>
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.label}</FormLabel>
      <RadioGroup aria-label={props.label} name={props.name} value={value} onChange={handleChange}>
        {props.radioValues.map(radioValue=>
            <FormControlLabel key ={radioValue.label} value={radioValue.value} control={<Radio />} label={radioValue.label} />
        )}
      </RadioGroup>
    </FormControl>
    </div>
  );
}
