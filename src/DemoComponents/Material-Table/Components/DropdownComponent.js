import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropdownComponent(props) {   
const options = props.options
  const defaultOption = options[0];
    return (
        <div>
            <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />  
        </div>
    )
}