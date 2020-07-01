// component's config object.
const components = {
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
	dashboard: {
		component: 'Dashboard',
		url: '/dashboard',
		title: 'Dashboard'
	},
	manager: {
		component: 'Manager',
		url: '/manager',
		title: 'Manager'
	},
	customers: {
		component: 'Customers',
		url: '/customers',
		title: 'Customers'
	},
	service1: {
		component: 'Service1',
		url: '/service1',
		title: 'Service1'
	},
	service2: {
		component: 'Service2',
		url: '/service2',
		title: 'Service2'
	}
};

// component's access to roles.
const rolesConfig = {
	admin: {
		routes: [...Object.values(components)]
	},
	manager: {
		routes: [
			components.dashboard,
			components.manager,
			components.customers,
			components.service1,
			components.service2
		]
	},
	customer: {
		routes: [components.service1, components.service2]
	},
	common: {
		routes: [
			{
				component: 'Home',
				url: '/',
				title: 'Home'
			},
			{
				component: 'Profile',
				url: '/profile',
				title: 'Profile'
			}
		]
	}
};

//main url for the project
export const path = {"url":"route-guards-dynamic"}

export { rolesConfig };
