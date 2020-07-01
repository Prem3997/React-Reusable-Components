import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { models } from './RouteGuards_Props';
import { useHistory } from 'react-router-dom';
import './Login.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
       flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const LoginForm = () => {
    const classes = useStyles();
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [error, setError] = useState(false)

    localStorage.setItem("loggedIn",false);
    const history=useHistory(); 

    const handleChangeName = (e) => {
        setName(e.target.value); 
    };
    const handleChangePass = (e) => {
      setPassword(e.target.value);
    };
    const handleSubmit = () =>{
      localStorage.setItem("UserName",name)
      setError(name!=="user" && name!== "admin" && name!=="admin1" && name!=="admin_user")
    
    models.forEach(model => 
      {     
      if(model.username === name){     
         if(model.username === "user"){
          localStorage.setItem("loggedIn",false) 
           alert("You are not authorised!!")
         }
        else{
          localStorage.setItem("loggedIn",true)
          history.push(`/route-guards`)
        }         
      }
    }
    )
    }
 
    return (
      <div>
         <h1 className='heading1'> Login(Username & password: user, admin, admin1, admin_user) </h1><br/>
         <h6 className='heading2'>'User' is not authorised</h6>
    <div className={classes.root}>
         <TextField
          id="outlined-full-width"
          label="Username"
          name="username1"
          value={name}
          style={{ width:'40%', marginLeft: '25%'}}
          placeholder="User Name"
          fullWidth
          error={error}
          helperText={error !== true ? '' : 'Invalid credentials'}
          margin="normal"
          required={true}
          onChange={handleChangeName} 
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

          <TextField
          id="outlined-full-width"
          label="Password"
          type="password"
          name="password"
          value={password}
          style={{ width:'40%', marginLeft: '25%'}}
          placeholder="Password"
          fullWidth
          required={true}
          margin="normal"
          onChange={handleChangePass}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /> 
           </div>
        <div className="login_button">
     <Button variant="contained"
        color="primary"
        style={{marginTop:'1%',textTransform:"none",fontSize:15}}
        type="submit"
        onClick={handleSubmit}
        disabled={name && password !== ''? false: true}
        >
        Login
     </Button>
      </div>
     
        </div>
    );
}

export default LoginForm;