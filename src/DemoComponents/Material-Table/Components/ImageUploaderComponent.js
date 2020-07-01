import React, { useState } from 'react';
import ImageUploader from "react-images-upload";

import '../Style/imageUpload.css'

function ImageUploaderComponent() {
    const [pictures,setPictures] = useState([])
          const onDrop = (pictureFiles, pictureDataURLs) => {
            setPictures(pictureFiles)
          }
          const ondeleteClick = () =>{
              setPictures([])
          }
    return (
        <div className='imageUploader'> 
            <div >
            <ImageUploader 
              withIcon={false}
              withPreview={false}
              label=""
              singleImage={true}
              buttonText="Upload image"
              buttonStyles={{backgroundColor:"white",color:"black",border:"0.5px solid grey",width:"130px",height:"30px",fontSize:"13px",fontWeight:"400",borderRadius:0,textAlign:"center"}}
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            />
            <div>
            {pictures && pictures.map(a=>(
              <div className="name-icon">{a.name}<span class="glyphicon glyphicon-trash" onClick={ondeleteClick}></span></div>
            ))}
            </div>
          </div>
        </div>
    );
}
export default ImageUploaderComponent;