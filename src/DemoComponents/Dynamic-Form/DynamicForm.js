import React from 'react'
import './FormStyles.css'
import {formData} from './FormProps'
import { DtcDynamicForm } from '../../SharedComponents/Dtc-Dynamic-Form/DtcDynamicForm'
const DynamicForm = () => {
    
    return (
        <div className='border-form'>
            <DtcDynamicForm formData={formData}/>
        </div>
    )
}

export default DynamicForm
