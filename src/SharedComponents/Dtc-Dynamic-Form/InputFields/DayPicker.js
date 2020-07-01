import React from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'


export default function DayPicker() {
    const [selectedMonday, setSelectedMonday] = React.useState(false);
    const [selectedTuesday, setSelectedTuesday] = React.useState(false);
    const [selectedWednesday, setSelectedWednesday] = React.useState(false);
    const [selectedThursday, setSelectedThursday] = React.useState(false);
    const [selectedFriday, setSelectedFriday] = React.useState(false);
    const [selectedSaturday, setSelectedSaturday] = React.useState(false);
    const [selectedSunday, setSelectedSunday] = React.useState(false);
    const handleSelectDate= (date)=>{
        if(!selectedSunday && date.getDay()===0){
            alert('Cannot Select Sunday')
            return false
        }
        if(!selectedMonday && date.getDay()===1){
            alert('Cannot Select Monday')
            return false
        }
        if(!selectedTuesday && date.getDay()===2){
            alert('Cannot Select Tuesday')
            return false
        }
        if(!selectedWednesday && date.getDay()===3){
            alert('Cannot Select Wednesday')
            return false
        }
        if(!selectedThursday && date.getDay()===4){
            alert('Cannot Select Thursday')
            return false
        }
        if(!selectedFriday && date.getDay()===5){
            alert('Cannot Select Friday')
            return false
        }
        if(!selectedSaturday && date.getDay()===6){
            alert('Cannot Select Saturday')
            return false
        }
        return true
      }
    return (
        <div>
            <div style={{marginLeft:'-90px'}}>Choose Days of the Week</div>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedSunday}
          onChange={() => {
            setSelectedSunday(!selectedSunday);
          }}  
        >
        Sun
        </ToggleButton>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedMonday}
          onChange={() => {
            setSelectedMonday(!selectedMonday);
          }}  
        >
        Mon
        </ToggleButton>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedTuesday}
          onChange={() => {
            setSelectedTuesday(!selectedTuesday);
          }}  
        >
        Tue
        </ToggleButton>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedWednesday}
          onChange={() => {
            setSelectedWednesday(!selectedWednesday);
          }}  
        >
        Wed
        </ToggleButton>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedThursday}
          onChange={() => {
            setSelectedThursday(!selectedThursday);
          }}  
        >
        Thu
        </ToggleButton>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedFriday}
          onChange={() => {
            setSelectedFriday(!selectedFriday);
          }}  
        >
        Fri
        </ToggleButton>
        <ToggleButton
          size="small"
          value="check"
          selected={selectedSaturday}
          onChange={() => {
            setSelectedSaturday(!selectedSaturday);
          }}  
        >
        Sat
        </ToggleButton>
            
        </div>
    )
}
