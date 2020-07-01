import React from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import {  CSVLink } from "react-csv";
import { docDefinition } from '../../DemoComponents/Download-File/PdfMaker';
import './print.css';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
pdfMake.vfs = pdfFonts.pdfMake.vfs

const DtcExportData = (props) =>{

    var pdfIcon = props.images.map(a=>a.PdfIcon)
    var excelIcon = props.images.map(a=>a.ExcelIcon) 
    var csvIcon = props.images.map(a=>a.CsvIcon)
    
    const excel_generator =()=>{
     
        XLSX.WorkSheet = XLSX.utils.json_to_sheet(props.data);
     
        var wscols = props.colwidth
     
        const worksheet = XLSX.WorkSheet;
        worksheet['!cols'] = wscols;
     
         XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
         var workbook = XLSX.WorkBook;
        
     
        if(!workbook.Props) workbook.Props = {};
        workbook.Props.Title = "Dxc Data";
         
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
         saveAsExcelFile(excelBuffer, props.XLfilename);       
         }
     
         const saveAsExcelFile =(buffer,fileName) =>{
             const data1 = new Blob([buffer], {
                 type: EXCEL_TYPE
             });
           FileSaver.saveAs(data1, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
         }


    const pdfGenerator = () =>{
        pdfMake.createPdf(docDefinition).download(props.PdfFilename)

    }
    
    return (
        <div className="export-data">
          { props.exportOptions.map(a=>a === 'PdfExport')  ? 
         <span className="exportData" onClick={pdfGenerator}>  <img src={pdfIcon[0]} alt="PDF"/>Pdf Export </span> : null }
         {  props.exportOptions.map(a=>a === 'ExcelExport')?
         <span className="exportData" onClick={excel_generator}>  <img src={excelIcon[1]} alt="Excel"/>Excel Export </span> : null}
         { props.exportOptions.map(a=>a === 'CsvExport') ?
         <span className="exportData">  <img src={csvIcon[2]} alt="CSV"/><CSVLink headers={props.headers} data={props.data} 
           id="exportCsv" filename={props.CSVfilename} >Csv Export</CSVLink>  </span>  : null} 
        </div>
    )
}

export default DtcExportData;