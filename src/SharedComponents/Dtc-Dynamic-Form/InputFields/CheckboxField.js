import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
export default function CheckboxField(props) {
    var checkedArr = []
    props.checkboxValues.map(checkboxValue => {
        var obj = { name: checkboxValue.label, checked: checkboxValue.checked }
        checkedArr.push(obj)
        return checkboxValue
    })
    const [state, setState] = React.useState({ checkedArr })
    const handleChange = (event) => {
        props._handleChange(event)
        state.checkedArr.map(a => {
            if (a.name === event.target.name) {
                a.checked = event.target.checked
            }
            return a
        })
        setState({
            ...state,
        })
    };
    return (
        <div style={{ marginLeft: '-100px' }}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{props.label}</FormLabel>
                <FormGroup>
                    {state.checkedArr.map(checkboxValue =>
                        <FormControlLabel
                            key={checkboxValue.name}
                            control={
                                <Checkbox checked={checkboxValue.checked} name={checkboxValue.name} onChange={handleChange} />}
                            label={checkboxValue.name}
                        />)}
                </FormGroup>
            </FormControl>
        </div>
    )
}
