import React, { useState } from 'react';
import './HorizontalTab.scss';
import DynamicTabHorizontalLink from './DynamicTabHorizontalLink';
import DynamicTabHorizontalForm from './DynamicTabHorizontalForm';


const DtcDynamicTabHorizontal = ({navLinkData}) => {
    var obj = {}
    const [state, setState] = useState({
        menuId: '',
        menuName: '',
        menuUrl: ''
    })

    const [arrTab, setArrTab] = useState(navLinkData)
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        obj = { 'menuId': state.menuId, 'menuName': state.menuName, 'menuUrl': state.menuUrl }
        setArrTab([...arrTab, obj])
        setState({
            menuId: '',
            menuName: '',
            menuUrl: ''
        })
        console.log(arrTab)
    }
    
    return (
        <div>            
                <DynamicTabHorizontalForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} state={state}></DynamicTabHorizontalForm>
                <DynamicTabHorizontalLink tabData={arrTab}></DynamicTabHorizontalLink>    
        </div>
    );
}

export default DtcDynamicTabHorizontal;




