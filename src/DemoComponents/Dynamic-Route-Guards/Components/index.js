import React from 'react';
import { SpeechToText } from '../../SpeechToText/SpeechToText'
import './index.css';

// Private routes.
const AdminOnly = () => <div><SpeechToText/></div>
const Users = () => <h2 id="wrapper">Users</h2>
const Dashboard = () => <h2 id="wrapper">Dashboard</h2>
const Manager = () => <h2 id="wrapper">Manager</h2>
const Customers = () =><h2 id="wrapper">Customers</h2> 
const Service1 = () => <h2 id="wrapper">Service 1</h2>
const Service2 = () => <h2 id="wrapper">Service 2</h2>
const Profile = () => <h2 id="wrapper">Profile</h2>
const Home = () => <h2 id="wrapper">Home</h2>   

export {
	AdminOnly,
	Users,
	Dashboard,
	Manager,
	Customers,
	Service1,
	Service2,
	Profile,
	Home
};
