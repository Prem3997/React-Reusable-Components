import React from 'react'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
export default function SwitchField(props) {
    var switchArr = []
    props.switchValues.map(switchValue => {
        var obj = { name: switchValue.label, checked: switchValue.checked }
        switchArr.push(obj)
        return switchValue
    })
    const [state, setState] = React.useState({ switchArr })
    const handleChange = (event) => {
        props._handleChange(event)
        state.switchArr.map(a => {
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
                    {state.switchArr.map(switchValue =>
                        <FormControlLabel
                            key={switchValue.name}
                            control={
                                <Switch
                                    checked={switchValue.checked}
                                    name={switchValue.name}
                                    onChange={handleChange} />}
                            label={switchValue.name}
                        />)}
                </FormGroup>
            </FormControl>
        </div>
    )
}
