import React from 'react'
import { Route } from 'react-router-dom'
import Modify from './Components/Modify'
import Authorisation from '../../SharedComponents/Dtc-Route-Guards/Authorisation'
import { models } from './RouteGuards_Props'
import ReactTable from '../React-Table/ReactTable'

const RoleBasedAuth = () =>{

    const userType = localStorage.getItem('UserName')

    const employeeRoles = models
    .filter(model => {return model.username === "admin" || model.username === 'admin1' || model.username === 'admin_user'})
    .map(role => { return role.username })

    const modifyRoles = models
    .filter(model => {return model.username === "admin" || model.username === 'admin1'})
    .map(role => { return role.username })

    return (
        <div>         
        <Route exact path='/route-guards/employee-data' component={Authorisation(ReactTable,
        employeeRoles,userType)}></Route>

        <Route exact path='/route-guards/modify' component={Authorisation(Modify,
        modifyRoles,userType)}></Route>      
        </div>

    );
}

export default RoleBasedAuth;