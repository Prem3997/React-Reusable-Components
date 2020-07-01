<h1 align='center'>Route Guards</h1>
<h2>Authorization based on the Components</h2>

## Installation guidelines/steps

Copy Route-Guards Folder<br/>

## Sample Configuration file (for username and password)

export var models = [ <br/>
    {  <br/>
    "username":"user",  <br/>
    "password":"user"  <br/>
   }  <br/>
]  <br/>
    
## How to use the Component
Route Guards contains authentication and authorization of the routes<br/>
For authentication, use private Routes(< PrivateRoute/>) instead of < Route/> <br/>
For authorisation, use Authorisation function wherever the user wants to authorize the component <br/>
If the user wants to hide some particular data of the component for some roles, then use hasAccess utils <br/>

## Component Description

- Based on the roles or the username, the user can display and hide some components 
- Based on the roles or the username, the user can display and hide some particular data of the component

## How to use the Component(brief)

- Copy the Route-Guards folder
- Pass the username and password in RouteGuards_Props file
- Do validations for username and password in Login file and set the localStorage for the current userType
- Create require components in Components folder
- Now, based on the roles or username display and hide the components using Authorisation function
- Eg:   <b>Authorisation(ReactTable,employeeRoles,userType)</b> 
- Here, ReactTable is the component. employeeRoles are the allowed roles or who can see this component (ie..If ReactTable can be allowed to visible for admin and admin_user, then give [`admin`,`admin_user`]) userType is the current userType and get it from localStorage(ie..To check with current user based on entered username or role)
- Based on the roles or username display only the required data on the components using hasAccess utils. 
- Eg:   <b>{ hasAccess(modifyRoles,props.userType) &&   element }</b>
- Here, modifyRoles are the allowed roles or who can see this data (ie.For the below element, who have the access to see). userType is the props data that u get from Authorisation function
- For authentication of routes, instead of normal < Route/> use < PrivateRoute/>. This will go and check whether this route have access or not; If not then it will re-direct to login page