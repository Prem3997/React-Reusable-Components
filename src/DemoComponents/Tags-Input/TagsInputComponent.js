import React from 'react';
import DtcTagsInput from '../../SharedComponents/Dtc-Tags-Input/DtcTagsInput';

function TagsInputComponent(props) {
    const tagsChange=(value)=>{
        /* console.log(value) */
    }
    return (
        <div>
            <DtcTagsInput unique={true} placeholder="Add a tag" pasteSplit=';' tagsChange={tagsChange}></DtcTagsInput>
        </div>
    );
}

export default TagsInputComponent;