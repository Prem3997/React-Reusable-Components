import React from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { DtcButton } from '../Dtc-Button/DtcButton';
import './print.css';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const DtcDownloadExcelFile = (props) =>{

    const excel_generator =()=>{
     
   XLSX.WorkSheet = XLSX.utils.json_to_sheet(props.data);

   var wscols = props.colwidth;

   const worksheet = XLSX.WorkSheet;
   worksheet['!cols'] = wscols;
    
    XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    var workbook = XLSX.WorkBook;
    
   const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAsExcelFile(excelBuffer, props.filename);       
    }

    const saveAsExcelFile =(buffer,fileName) =>{
        const data1 = new Blob([buffer], {
            type: EXCEL_TYPE
        });
      FileSaver.saveAs(data1, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    return (
        <div> 
            <DtcButton
                className='dtc-secondary-whiteBg'
                onClick={excel_generator}
                buttonLabel='Download Excel'
            /><br></br>
        </div>
    );
}

export default DtcDownloadExcelFile;