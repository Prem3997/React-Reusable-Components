import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import "./snack-bar.css";

const DtcSnackBarComponent = (props) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const [text,setText]=useState(props.text)
  const [position1, setPosition1] = useState("");
  const [position2, setPosition2] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [actionLabel,setActionLabel]=useState(props.actionLabel)
  const [fadeDuration,setFadeDuration1]=useState(props.fadeDuration)
  const action = (
    <Button color="secondary" size="small" onClick={()=>handleActionButton()}>
      {actionLabel}
    </Button>
  );

  const handleHorizontalPosition = (event) => {
    setPosition1(event.target.value);
  };
  const handleVerticalPosition = (event) => {
    setPosition2(event.target.value);
  };
  const checkActionButton = (event) => {
    setChecked1(event.target.checked);
    console.log(event.target.checked)
  };
  const checkDuration = (event) => {
    setChecked2(event.target.checked);
  };

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    console.log(props)
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleText=(event)=>{
    setText(event.target.value)
  }
  const handleAction=(event)=>{
    setActionLabel(event.target.value)
  }
  const handleActionButton=()=>{
    setState({ ...state, open: false });
  }
  const handleDuration=(event)=>{
    setFadeDuration1(event.target.value)
  }
  return (
    <div className="snackbar-container">
      <h1 className="snackbar-heading">SnackBar</h1>
      <form noValidate autoComplete="off">
        {/* <TextField id="standard-basic" label="Standard" margin="fullWidth" /> */}
        Message*
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleText}
        />
        Position in Page*
        <div className="snackbar-select"><Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-1"
          value={position1}
          onChange={handleHorizontalPosition}
          fullWidth
        >
          {/* <MenuItem value={"Start"}>Start</MenuItem>
          <MenuItem value={"End"}>End</MenuItem> */}
          <MenuItem value={"Left"}>Left</MenuItem>
          <MenuItem value={"Right"}>Right</MenuItem>
          <MenuItem value={"Center"}>Center</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-2"
          value={position2}
          onChange={handleVerticalPosition}
          fullWidth
          size="large"
        >
          <MenuItem value={"Top"}>Top</MenuItem>
          <MenuItem value={"Bottom"}>Bottom</MenuItem>
        </Select>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked1}
                onChange={checkActionButton}
                name="checked1"
                color="secondary"
              />
            }
            label={
              checked1?<TextField
                id="filled-full-width-2"
                style={{ margin: 8 }}
                placeholder="Show button on snack bar"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleAction}
              />:"Show Button on Snack Bar"
            }
          ></FormControlLabel>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked2}
                onChange={checkDuration}
                name="checked2"
                color="secondary"
              />
            }
            label={
              checked2?<TextField
                id="filled-full-width-3"
                style={{ margin: 8 }}
                // helperText="Full width!"
                placeholder="Auto Hide after duration"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleDuration}
              />:"Auto Hide after duration"
            }
          ></FormControlLabel>
        </div>
        
        
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClick({ vertical: position2, horizontal: position1 })}
          id="Snackbar-button"
        >
          Display Message
        </Button>
      </form>
      <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          onClose={handleClose}
          message={text}
          action={action}
          autoHideDuration={fadeDuration}
          
        />
    </div>
  );
};

export default DtcSnackBarComponent;
