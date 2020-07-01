import React,{useState} from 'react'
import DropdownSelect from './InputFields/DropdownSelect'
import InputTextField from './InputFields/InputTextField'
import TextAreaField from './InputFields/TextAreaField'
import CheckboxField from './InputFields/CheckboxField'
import DateInput from './InputFields/DateInput'
import TimeInput from './InputFields/TimeInput'
import RadioButton from './InputFields/RadioButton'
import FormControl from '@material-ui/core/FormControl';
import SwitchField from './InputFields/SwitchField'
import DateRange from './InputFields/DateRange'


export const DtcDynamicForm = (props) => {
    
    var formData=props.formData
    const [formValue,setFormValue]=useState('')
    const _handleChange=event=>{
        if(event.currentTarget.type==='checkbox'){
                setFormValue({
                    ...formValue,
                    [event.currentTarget.name]:event.currentTarget.checked
                })
        }
        if(event.currentTarget.type==='text'){
            setFormValue({
                ...formValue,
                [event.currentTarget.name]:event.currentTarget.value
            })
        }
        if(event.currentTarget.type==='textarea'){
            setFormValue({
                ...formValue,
                [event.currentTarget.name]:event.currentTarget.value
            })
        }
        if(event.currentTarget.type==='select-one'){
            setFormValue({
                ...formValue,
                [event.currentTarget.name]:event.currentTarget.value
            })
        }
        if(event.currentTarget.type==='date'){
            setFormValue({
                ...formValue,
                [event.currentTarget.name]:event.currentTarget.value
            })
        }
        if(event.currentTarget.type==='time'){
            setFormValue({
                ...formValue,
                [event.currentTarget.name]:event.currentTarget.value
            })
        }
        if(event.currentTarget.type==='radio'){
            setFormValue({
                ...formValue,
                [event.currentTarget.name]:event.currentTarget.value
            })
        }
    }
    const submitForm=event=>{
        console.log(formValue)
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                {formData.fields.map((formFields,i)=>{
                    if(formFields.input_type==="text"){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset">
                            <InputTextField
                                name={formFields.name}
                                placeholder={formFields.placeholder}
                                required={formFields.required}
                                key={formFields.placeholder}
                                _handleChange={_handleChange}
                            />
                            </FormControl>
                            </div>
                        )
                    } 
                    if(formFields.input_type==='dropdown'){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset">
                            <DropdownSelect
                                name={formFields.name}
                                placeholder={formFields.placeholder}
                                required={formFields.required}
                                key={formFields.placeholder}
                                val={formFields.values}
                               _handleChange={_handleChange}
                            />
                            </FormControl>
                            </div>
                        )
                    }
                    if(formFields.input_type==='big_text'){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset">
                            <TextAreaField
                                name={formFields.name}
                                placeholder={formFields.placeholder}
                                required={formFields.required}
                                key={formFields.placeholder}
                                _handleChange={_handleChange}

                            />
                            </FormControl>
                            </div>
                        )
                    }
                    if(formFields.input_type==='checkbox'){
                        return(
                        <div key={i}>
                        <FormControl component="fieldset">
                        <CheckboxField 
                            label={formFields.label}
                            name={formFields.name}
                            _handleChange={_handleChange}
                            checkboxValues={formFields.checkboxValues}
                            />
                        </FormControl>
                        </div>  
                        )
                    }
                    if(formFields.input_type==='switch'){
                        return(
                        <div key={i}>
                        <FormControl component="fieldset">
                        <SwitchField 
                            label={formFields.label}
                            name={formFields.name}
                            _handleChange={_handleChange}
                            switchValues={formFields.switchValues}
                            />
                        </FormControl>
                        </div>
                        
                        )
                    }
                    if(formFields.input_type==='date'){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset">
                            <DateInput 
                                name={formFields.name}
                                label={formFields.label} 
                                _handleChange={_handleChange}
                            />
                            </FormControl>
                            </div>
                            
                        )
                    }
                    if(formFields.input_type==='time'){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset">
                            <TimeInput
                                name={formFields.name} 
                                label={formFields.label} 
                                _handleChange={_handleChange}
                            />
                            </FormControl>
                            </div>
                        )
                    }
                    if(formFields.input_type==='radio'){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset" key={i}>
                            <RadioButton 
                                defaultKey={formFields.defaultKey} 
                                label={formFields.label} 
                                name={formFields.name} 
                                _handleChange={_handleChange} 
                                radioValues={formFields.radioValues}/>
                            </FormControl>
                            </div>
                        )
                    }
                    if(formFields.input_type==='dateRange'){
                        return(
                            <div key={i}>
                            <FormControl component="fieldset">
                            <DateRange 
                                fromName={formFields.fromName}
                                toName={formFields.toName}
                                _handleChange={_handleChange}
                            />
                            </FormControl>
                            </div>
                        )
                    }
                return formFields})}
                <FormControl component="fieldset"><br></br><input type="submit"/><br></br></FormControl>
            </form>
        </div>
    )
}
