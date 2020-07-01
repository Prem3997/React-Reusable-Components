import React from 'react'

const DropdownSelect=({name,placeholder,required,val,_handleChange})=>(
    <div>
        <br></br>
        <select style={{width:'200px'}} name={name} required={required} onChange={_handleChange}>
            <option value="">{placeholder}</option>
            {val.map(values=><option value={values} key={values}>{values}</option>)}
        </select>
    </div>
);
export default DropdownSelect