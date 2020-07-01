import React, { useState } from 'react';
import '../Dtc-FileUpload/Style/file-upload.css' ;


const DtcUploadFile = (props) => {
   
    const [filename,setFilename] = useState('')
    const [fileSize,setFilesize] = useState('1')
    const [show,setShow]=useState('none')
    const [filedetails,setFiledetails]=useState({})
    const handleRemove=()=>{
      
      setFilesize(1)
      setFilename('')
      setShow('none')
      props.setDisplay('none')
      setFiledetails({})
     
  }
  
    const onChangeHandler=event=>{
        const filedetails=event.target.files[0]
        setFiledetails(filedetails)
        
        if(filedetails.size>props.size){
            alert('File size is more')
        }
        else{
            var num = (props.size-filedetails.size)/1000000
            const sizeLeft=num.toFixed(2)
            const enteredName = prompt('Please enter file name',filedetails.name)
            if (enteredName !== null)
            {
            setFilesize(sizeLeft)
            setFilename(enteredName)
            setShow('block')
        }
    }
    
    }
    return (
        <div className="file-upload">
          <span className="heading">
        <b>Choose your file</b>
        </span>
        <label className="custom-file-upload">
        <input type="file" accept={props.accept} onChange={onChangeHandler} className="file"/>
        Browse
        </label>
       
        <div className="file-size">{fileSize}mb left</div>
        <div style={{display:show}} className="base">
        <div className="filename"><b>{filename}</b></div>
        <div className="delete-image">
        <img className="delete-icon" src={props.deleteicon}  onClick={()=>{if(window.confirm('Are you sure,you want to delete this file?')){handleRemove()};}} alt="loading..."></img>
        </div>
        <img  src={props.uploadicon} className="upload" alt="loading..." onClick={()=>{props.uploadHandle(filedetails)}}></img>
        </div>
       
        
        
        </div>
    );
}

export default DtcUploadFile;