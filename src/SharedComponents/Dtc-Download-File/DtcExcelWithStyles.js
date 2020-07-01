import React from 'react';
import ReactExport from 'react-data-export';
import { DtcButton } from '../Dtc-Button/DtcButton';
import './print.css';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const DtcExcelWithStyles=(props)=> {
   
        return (
            <div>
                <ExcelFile element={<div> <DtcButton
                className='dtc-secondary-whiteBg'
                buttonLabel='Download Excel with styles'
                /><br></br></div>}>
                    <ExcelSheet dataSet={props.multiDataSet} name={props.WorksheetName}/>
                </ExcelFile>
            </div>
        );
    }


export default DtcExcelWithStyles;