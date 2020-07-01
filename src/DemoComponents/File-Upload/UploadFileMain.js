import React, { useState, Fragment } from 'react';
import DtcUploadFile from '../../SharedComponents/Dtc-FileUpload/DtcUploadFile';
import deleteicon from './Assets/delete.png';
import uploadicon from './Assets/upload-icon.png';
import '../../DemoComponents/File-Upload/Style/upload.css'

const UploadFileMain=(props)=> {
   const [data]=useState({})
   const [display,setDisplay]=useState('none')

    const uploadHandle = (filedetails) =>
    {
       /*  console.log(filedetails)
        setData(filedetails)
        setDisplay('block')
         */
    }
    return (
        <Fragment>
            <DtcUploadFile uploadHandle={uploadHandle} uploadicon={uploadicon} deleteicon={deleteicon} size={1*1024*1024} setDisplay={setDisplay} accept=".*" ></DtcUploadFile>
            <div style={{display:display}}>
            <div className="message">Uploaded Successfully!!</div> 
            <div className="details">
            <div>Filename:{data.name}</div>
            <div>Filesize:{data.size}</div>
            </div>
            </div>
        </Fragment>
    );
}

export default UploadFileMain;