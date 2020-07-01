<h1 align='center'>Dynamic Route Guards</h1>
<h2>Authorization based on the Roles</h2>

## Library/PackageName
 lodash

## Library/PackageVersion
 "lodash": "^4.17.15"

## Library/PackageLicense

## Installation guidelines/steps

Copy Route-Guards Folder<br/>
Install lodash <br/>

## Sample Configuration file 
# Components Configuration
const components = { <br/>
	admin: {   
		component: 'AdminOnly', 
		url: '/admin-only',
		title: 'Admin Only'
	},  
	users: {
		component: 'Users',
		url: '/users',
		title: 'Users'
	},
	manager: {
		component: 'Manager',
		url: '/manager',
		title: 'Manager'
	}
}  <br/>

# Component's access to roles 
const rolesConfig = {  <br/>
	admin: {  
		routes: [...Object.values(components)]
	},
	manager: {
		routes: [
			components.users,
			components.manager
		]
	},
	customer: {
		routes: [components.users, components.admin]
	},
    common: {
    routes: [
        {
            component: 'Home',
            url: '/',
            title: 'Home'
        }
    ]
    }
}  <br/>
    
## Configuration 
Add Components configuration and its accessibilty to the roles<br/>
# On Configuring the roles: 
- Define each role as a key to the object.
- Each key holds a config object. It gives the permissions in which it contains component name, title and the url.
- The component name should match with that of index file in Demo folder.
- Title is the title for Navigation bar.
# On Configuring component's accessibility to roles: 
- The key name for rolesConfig should match with the select option in Login file. 
- The Component's permission based on the roles should be added here.
- If some components can be seen by all other roles, then put that in `common` key.

## Component Description

- Based on the roles, it will prevent the app to generate unnecessary routes, rather checking current user role on each route it is great to generate only the routes that user have access.
- Based on the configuration of the roles, routes can be generated dynamically.

# Benefits
1. Check at once
2. Generate only the routes that user have access
3. The central roles configuration file
4. Easy to update roles permission
5. Multiple roles support
6. Common routes support

## How to use the Component(brief)

- Copy the Dynamic-Route-Guards folder
- Pass the roles and its accesibility in the roles file 
- Create Login file and set the localStorage for the current user(Selected user if it is select options)
- Create require components in Components folder
- Change Navigation file and its css based on the requirements
- Import all private routes in index file and add in export object
- Import all public routes in PublicRoutes file
- Define the routing scheme : (in AppMain file )                   
 < Route path={`/${path.url}/app`} component={PrivateRoutes} /> 
 < Route path={`/${path.url}`} render={authentication} />
- In this demo, all private routes start after `/app/` but you can use your own route’s path/address convention
- For all the routes, `/route-guards-dynamic/` is the base url used here. you can change this via `path` in config file 
