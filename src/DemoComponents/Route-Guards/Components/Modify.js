import React from 'react';
import { hasAccess } from '../../../SharedComponents/Dtc-Route-Guards/utils/hasAccess';
import { models } from '../RouteGuards_Props';

const Modify = (props) =>{

    const modifyRoles = models
      .filter(model => {return model.username === "admin" })
      .map(role => { return role.username })

    return (
        <div style={{margin:"3% auto",width:"40%"}}>
         <form>
  <div className="form-group">
    <label >Employee Name</label>
    <input type="password" className="form-control" placeholder="Enter Employee Name"/>
  </div>

  <div className="form-group">
    <label>Employee Id</label>
    <input type="password" className="form-control" placeholder="Enter Employee Id"/>
  </div>

  <div className="form-group">
    <label>Contact</label>
    <input type="password" className="form-control" placeholder="Enter Contact"/>
  </div>

       { hasAccess(modifyRoles,props.userType) &&   
       <div className="form-group">
       <label>Email address</label>
       <input type="email" className="form-control" placeholder="Enter email"/>
     </div> 
        }

          </form>
         
        </div>
    );
}

export default Modify;