import React from 'react'
import TextField from '@material-ui/core/TextField';

const TextAreaField=({name,placeholder,required,_handleChange})=>(
    <div style={{width:'200px'}}>
        <TextField
            type="text"
            name={name}
            label={name}
            required={required}
            multiline
            rowsMax={6}
            autoComplete="off"
            placeholder={placeholder}
            onChange={_handleChange}
            fullWidth
        />
       
    </div>
);
export default TextAreaField