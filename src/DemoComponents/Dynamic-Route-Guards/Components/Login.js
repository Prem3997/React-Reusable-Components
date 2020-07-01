import React,{ useState } from 'react';
import { Alert, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { path } from '../config/roles';
import './Login.css';

function Login() {
    const history=useHistory();
    const [selected, setSelected] = useState('')
    
    const handleChange = (e) =>{
        let selected = [];
		for (let i = 0; i < e.target.options.length; i++) {
			if (e.target.options[i].selected) {
				selected.push(e.target.options[i].value);
			}
		}
        setSelected( selected[0] ); 
        console.log(selected)       
    }
     
    const handleClick = () => {
        localStorage.setItem('roles', JSON.stringify(selected));
        history.push(`/${path.url}/app`);
        console.log(localStorage.getItem('roles'));   
    }
    
    return (
        <div /* style={{margin:"0 auto",width:"65%",fontSize:'16px'}} */ className="login_wrapper">
            <h2>Role Based Authorization</h2>
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Role:</Form.Label>
            <Form.Control
                as="select"
                // value={selected}
                onChange={handleChange}
                style={{fontSize:"14px"}}
                multiple>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="customer">Customer</option>
            </Form.Control>
        </Form.Group>
        <Alert variant="primary">Support multi roles.</Alert>
        <Row className="text-right">
      
            <Col sm={11}>
                <Link to={`/${path.url}/forgot-password`}>Forgot Password</Link>
            </Col>
            <Col sm={1}>
                <Link to={`/${path.url}/register`}>Register</Link>
                
            </Col>
 
        </Row>
        <Button
            variant="primary"
            onClick={handleClick}
            style={{fontSize:"18px"}}
             disabled={selected.length===0?true:false}
            >
            Login
        </Button>
    </div>
    );
}

export default Login;