import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link, useHistory} from 'react-router-dom';
import RoleBasedAuth from './RoleBasedAuth';
import './RouteGuards.css';

const RouteGuards = () => {

    const history=useHistory();

    const logout = () =>{
        localStorage.setItem("loggedIn",false);
        history.push(`/route-guards-login`)
    }

    return (
        <Router>
        <div>
          <h3>Admin have the access to get Employee data and to modify employee data</h3>
           <h3>Admin_User have the access to get Employee data but not to modify data</h3>
           <h3> Admin1 have both the access but can't able to see e-mail part in modify data</h3>  
             <Button variant="contained"
        color="primary"
        style={{marginTop:'1%',marginRight:"-90%",textTransform:"none",fontSize:15}}
        onClick={logout}>
        Logout
             </Button> 

     <div className="routes">
     <Link to={`/route-guards/employee-data`} style={{textDecoration:"none"}}>
      <Button variant="contained"
        color="primary"
        style={{marginTop:'6%',textTransform:"none",fontSize:13}}>
        Click here to access employee data(admin,admin1,admin_user)
     </Button>
     </Link>

    <Link to={`/route-guards/modify`}
    style={{textDecoration:"none",marginLeft:'3%'}}>
        <Button variant="contained"
            color="secondary"
            style={{marginTop:'6%',textTransform:"none",fontSize:13}}>
            Click here to modify employee data(for admin1,email is not visible)
        </Button> 
        </Link>
        </div>

       <RoleBasedAuth/>

        </div>
    </Router>
    );
}

export default RouteGuards;