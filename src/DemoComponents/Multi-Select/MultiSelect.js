import React from 'react'
import {data,columns,parentChildData,myDivStyle,selectedRowColor} from './MultiSelectProps'
import useMediaQuery from 'react-use-media-query-hook';
import DtcMultiSelectComponent from '../../SharedComponents/Dtc-Multi-Select/DtcMultiSelectComponent';
export default function MultiSelect() {
    const isLaptop = useMediaQuery('(width: 1600px)');
    const isLaptopBig = useMediaQuery('(min-width: 2880px)');
    const isMobile = useMediaQuery('(max-width: 575px)')
    var myDivStyles={}
    if(isLaptop){
        myDivStyles={
            marginLeft:"20rem"
        }
    }
    else if(isLaptopBig){
        myDivStyles={
            marginLeft:"30rem"
        }
    }
    else if(isMobile){
        myDivStyles={
          width: "90%",
          margin: "0 auto"
        }
      }
    else{
      myDivStyles={
        marginLeft:"10rem"
      }
    }
    return (
        <div style={myDivStyles}>
            <DtcMultiSelectComponent
            data={data} 
            columns={columns} 
            myDivStyle={myDivStyle}
            selectedRowColor={selectedRowColor} 
            parentChildData={parentChildData}/>
        </div>
    )
}
