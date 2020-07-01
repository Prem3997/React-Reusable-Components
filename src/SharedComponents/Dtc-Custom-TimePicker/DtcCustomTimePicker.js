import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { addHours,subHours,addMinutes,subMinutes } from 'date-fns';
import { Button,TextField } from '@material-ui/core';


export const DtcCustomTimePicker = () => {
    const [selectedStartTime, setSelectedStartTime] = useState(new Date());
    const [selectedEndTime, setSelectedEndTime] = useState(new Date());
    const [minNow,setMinNow]=useState('')
    const [hrNow,setHrNow]=useState('')
    const [minUpToNow,setMinUpToNow]=useState('')
    const [hrUpToNow,setHrUpToNow]=useState('')
    const handleStartTimeChange = (date) => {
         setSelectedStartTime(date);
     };
     const handleEndTimeChange = (date) => {
        setSelectedEndTime(date);
    };
    const lastHrClicked=(hours)=>{
        setSelectedStartTime(subHours(new Date(),hours))
        setSelectedEndTime(new Date())
    }
    const nextHrClicked=(hours)=>{
        setSelectedStartTime(new Date())
        setSelectedEndTime(addHours(new Date(),hours))
    }
    const lastMinClicked=(minutes)=>{
        setSelectedStartTime(subMinutes(new Date(),minutes))
        setSelectedEndTime(new Date())
    }
    const nextMinClicked=(minutes)=>{
        setSelectedStartTime(new Date())
        setSelectedEndTime(addMinutes(new Date(),minutes))
    }
    const minStartingNowClicked=(e)=>{
        setMinNow(e.target.value)
        setHrNow('')
        setMinUpToNow('')
        setHrUpToNow('')
        setSelectedStartTime(new Date())
        setSelectedEndTime(addMinutes(new Date(),e.target.value))
    }
    const hrStartingNowClicked=(e)=>{
        setMinNow('')
        setHrNow(e.target.value)
        setMinUpToNow('')
        setHrUpToNow('')
        setSelectedStartTime(new Date())
        setSelectedEndTime(addHours(new Date(),e.target.value))
    }
    const minUpToNowClicked=(e)=>{
        setMinNow('')
        setHrNow('')
        setMinUpToNow(e.target.value)
        setHrUpToNow('')
        setSelectedStartTime(subMinutes(new Date(),e.target.value))
        setSelectedEndTime(new Date())
    }
    const hrUpToNowClicked=(e)=>{
        setMinNow('')
        setHrNow('')
        setMinUpToNow('')
        setHrUpToNow(e.target.value)
        setSelectedStartTime(subHours(new Date(),e.target.value))
        setSelectedEndTime(new Date())
    }
    return (
        <div style={{marginLeft:'15%'}}> 
            <Button size="large" style={{ fontSize: '13px' }} onClick={()=>lastHrClicked(1)}>Last 1 hr</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>nextHrClicked(1)}>Next 1 hr</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>lastHrClicked(3)}>Last 3 hrs</Button>
            <Button size='large' style={{ fontSize: '13px' }}  onClick={()=>nextHrClicked(3)}>Next 3 hr</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>lastMinClicked(15)}>Last 15 Min</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>nextMinClicked(15)}>Next 15 Min</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>lastMinClicked(30)}>Last 30 Min</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>nextMinClicked(30)}>Next 30 Min</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>lastMinClicked(45)}>Last 45 Min</Button>
            <Button size='large' style={{ fontSize: '13px' }} onClick={()=>nextMinClicked(45)}>Next 45 Min</Button>
            <br></br>
            <TextField 
                id="outlined-basic" 
                label="Minutes Starting Now" 
                variant="outlined" 
                type='number'
                value={minNow}
                onChange={minStartingNowClicked} />
                <TextField 
                id="outlined-basic" 
                label="Minutes UpTo Now" 
                variant="outlined" 
                type='number'
                value={minUpToNow}
                onChange={minUpToNowClicked} />
            <TextField 
                id="outlined-basic" 
                label="Hrs Starting Now" 
                variant="outlined" 
                type='number'
                value={hrNow}
                onChange={hrStartingNowClicked} />
            <TextField 
                id="outlined-basic" 
                label="Hrs UpTo Now" 
                variant="outlined" 
                type='number'
                value={hrUpToNow}
                onChange={hrUpToNowClicked} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardTimePicker
                margin="normal"
                id="start-time"
                label="Start Time"
                value={selectedStartTime}
                onChange={handleStartTimeChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                inputProps={{style:{fontSize:30}}}
                InputLabelProps={{style:{fontSize:20}}}
                />
            </Grid>
            <Grid container justify="space-around">
                <KeyboardTimePicker
                margin="normal"
                id="end-time"
                label="End Time"
                value={selectedEndTime}
                onChange={handleEndTimeChange}
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
                inputProps={{style:{fontSize:30}}}
                InputLabelProps={{style:{fontSize:20}}}
                />
            </Grid>
            </MuiPickersUtilsProvider>
            <h2>
                Selected Time Range: {selectedStartTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - {selectedEndTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </h2>
            </div>
    )
}
