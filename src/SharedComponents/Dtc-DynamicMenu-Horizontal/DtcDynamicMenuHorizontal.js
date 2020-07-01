import React, { useState } from 'react';
import './HorizontalMenu.scss'
import DynamicMenuHorizontalLink from './DynamicMenuHorizontalLink';
import DynamicMenuHorizontalForm from './DynamicMenuHorizontalForm';


const DtcDynamicMenuHorizontal = ({navLinkData}) => {
    var obj = {}
    const [state, setState] = useState({
        menuId: '',
        menuName: '',
        menuUrl: '',
        //icon:'',
    })
    
    
    const [arrMenu, setArrMenu] = useState(navLinkData)
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
        obj = { 'menuId': state.menuId, 
                'menuName': state.menuName, 
                'menuUrl': state.menuUrl,
                // 'icon':state.icon 
             }
        setArrMenu([...arrMenu, obj])
        setState({
            menuId: '',
            menuName: '',
            menuUrl: '',
           // icon:''
        })
       
    }
    return (
        <div>                
                <DynamicMenuHorizontalForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} state={state}></DynamicMenuHorizontalForm>                
                <DynamicMenuHorizontalLink menuData={arrMenu}></DynamicMenuHorizontalLink>
        </div>
    );
}

export default DtcDynamicMenuHorizontal;




