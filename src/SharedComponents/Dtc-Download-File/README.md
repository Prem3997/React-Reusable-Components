<h1 align="center">DOWNLOAD FILE</h1>

This folder shows how to generate different types of File such as Word document(docx file),Pdf File(.pdf), Excel(.xlsx) and Csv(.csv) file so that the user can write and download the files according to their requirements.

There are different types of in-built librarires in react and the user should pick the correct library according to their needs. Here are some of the Examples.

## HOW TO USE THE COMPONENT(BRIEF):
(Note:If you want only one of the file, then copy that particular file and the corresponding props file and install only the particular dependency)

1.Copy the Download-file folder and install jspdf, jspdf-autotable, pdfmake, docx, xlsx, file-saver, react-data-export and react-csv. For pdfmake, add cdn link in index.html<br/>

2.For Pdf generation:
  - In Download Pdf File, change the DownloadPdfFile function according to the needs.
  - The used library here is jspdf. 
  ( import * as jsPDF from 'jspdf')
  - U can use pdfmake library also.
(The detailed description about these libraries is below)

3.For Word generation:
  - In Download Word File, change the word_generator function according to the needs.​
  - The used library is docx.

4.For Excel:
  - Copy Dtc download excel file.
  - Change the data values in Export data props and pass the necessary props values for excel.<br/>
  Eg: Change the props values for the colwidth and XLfilename.<br/>
  - This file doesn't contains any styling.

5.For Excel with styling:
  - Copy Dtc excel with styles.
  - Change the props values in Excel style props.
  - Styling should be made for each cell.<br/>
  Eg: ​xSteps : Will start putting cell with 1 empty cell on left most<br/>
      columns: [ {title: "ID",  width: {wpx: 80}, style:{font: {sz: "14", bold: true}}} ]
      title attribute shows the first column title. Give width and styling for this particular column. <br/>
       data: [ <br/>
        [ <br/>
                {value: "1", style: {font: {sz: "18", bold: false}}}, <br/>
                {value: "Ervin Howell"}, <br/>
                {value: "Antonette"}, <br/>
         ] <br/>
       ] <br/>
       Sample data value for each column. For each cell, add necessary styling.

6.For Pdf table styling:
  - Change the values in Pdf with styles file.​<br/>
   let content = { <br/>
      startY: 50, Will start putting Y cell from the top most<br/>
       head: headers, <br/>
      body: data1 <br/>
    }; <br/>
     doc.text(title, marginLeft, 40);<br/>
     Can use styling directly like this also.<br/>
  - The used library is jspdf-autotable. 
  - This library is particular for pdf table and styling.

7.For data export from any table:
  - Copy the Dtc Export Data file and pass the necessary props from Export data props.
  Pass the data in the following format:<br/>
  export var data = [{ <br/>
  "id": 1, <br/>
  "name": "Clementina DuBuque", <br/>
  "username": "Moriah.Stanton" <br/>
}] <br/>

The changable props features are:<br/>
export var exportOptions = ["PdfExport", "ExcelExport", "CsvExport"]<br/>
Specify which export options you need.<br/>

## PDF
export var options=["id","name","username","company","website"] - Attributes to get displayed. <br/>

export var title = 'DxcData' - title of the file<br/>

export var orientation='potrait' - required orientation <br/>

export var PdfFilename = "TableData.pdf" - name of the pdf file to get exported. <br/>

## Excel
export var colwidth=[ <br/>
{wpx: 15},
{wpx: 150}
] - Specify column widths <br/>

export var XLfilename="Dxc Data" - Excel file name <br/>

## CSV
export var headers = [  
    { label: "ID", key: "id" },
    { label: "Name", key: "name" }
] - along with the data give the headers to get bold text <br/>

export var CSVfilename = 'TableData.csv' - file name <br/>

export const images=[
  { "PdfIcon":require("../../DemoComponents/Download-File/Images/PdfIcon.png")},
  { "ExcelIcon":require("../../DemoComponents/Download-File/Images/ExcelIcon.png")},
  { "CsvIcon":require("../../DemoComponents/Download-File/Images/CsvIcon.png")}
] - change the image icons <br/>

  - For Pdf export, the used library here is pdfmake. You can change the default    implementation through PDfMaker file. 
  - For Excel export, the used library is xlsx. 
  - For Csv export, the used library is react-csv.

## DETAILED DESCRIPTIONS ABOUT THE LIBRARIES AND THE USAGE:

## 1.DownLoad PDF File

a) Using jspdf     
b) Using pdfmake

## JSPDF

JSPDF is the HTML5 client-side solution for generating PDFs.

Installation:<br/>
Using npm:<br/>
`npm install jspdf --save`<br/>
Then you're ready to start making your document:<br/>

Basic Example<br/>

// Default export is a4 paper, portrait, using milimeters for units<br/>
var doc = new jsPDF()<br/>
 
doc.text('Hello world!', 10, 10)<br/>
doc.save('a4.pdf')<br/>
If you want to change the paper size, orientation, or units, you can do:<br/>

// Landscape export, 2×4 inches<br/>
var doc = new jsPDF({<br/>
  orientation: 'landscape',<br/>
  unit: 'in',<br/>
  format: [4, 2]<br/>
})<br/>
 
doc.text('Hello world!', 1, 1)<br/>
doc.save('two-by-four.pdf')<br/>

GITHUB LINK: https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html#text<br/>
More examples: https://parall.ax/products/jspdf<br/>

## jspdf autotable(Mainly for creating tables)<br/>

Installation:<br/>
`npm install jspdf jspdf-autotable`<br/>
Usage:<br/>
import jsPDF from 'jspdf'<br/>
import 'jspdf-autotable'<br/>
 
const doc = new jsPDF()<br/>
 
// It can parse html:<br/>
// <table id="my-table"><!-- ... --></table><br/>
doc.autoTable({ html: '#my-table' })<br/>
 
// Or use javascript directly:<br/>
doc.autoTable({<br/>
  head: [['Name', 'Email', 'Country']],<br/>
  body: [<br/>
    ['David', 'david@example.com', 'Sweden'],<br/>
    ['Castille', 'castille@example.com', 'Spain'],<br/>
    // ... <br/>
  ],<br/>
})<br/>
 
doc.save('table.pdf') <br/>

For more examples and usage refer github link: <br/>
https://github.com/simonbengtsson/jsPDF-AutoTable <br/>

## pdfmake

PdfMake is an open source JavaScript library to generate PDF in browser or mobile device. It provides custom layout options for your document and also allows you to add images. 

Installation<br/>
Using npm:<br/>

`npm install pdfmake`<br/>

Usage:<br/>
Add these two scripts into index.html file:<br/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.65/pdfmake.min.js"></script><br/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.65/vfs_fonts.js"></script><br/>

import pdfMake from "pdfmake/build/pdfmake";<br/>
import pdfFonts from "pdfmake/build/vfs_fonts";<br/>
pdfMake.vfs = pdfFonts.pdfMake.vfs;<br/>
var docDefiniton = { content: 'This is an sample PDF printed with pdfMake' };<br/>
pdfmake.createPdf(docDefiniton).download();<br/>

Refer the github link to refer more examples<br/>
Github link:https://github.com/bpampuch/pdfmake/tree/0.1/examples<br/>

### 2.Download Word Document:

## docx 
Creating docx files with Js/TS<br/>

Installation:<br/>
`npm install --save docx`<br/>

Basic Usage:<br/>
import * as fs from "fs";<br/>
import { Document, Packer, Paragraph, TextRun } from "docx";<br/>

// Create document<br/>
const doc = new Document();<br/>

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections<br/>
// This simple example will only contain one section<br/>
doc.addSection({<br/>
    properties: {},<br/>
    children: [<br/>
        new Paragraph({<br/>
            children: [ <br/>
                new TextRun("Hello World"),<br/>
                new TextRun({<br/>
                    text: "Foo Bar",<br/>
                    bold: true,<br/>
                }),<br/>
                new TextRun({<br/>
                    text: "\tGithub is the best",<br/>
                    bold: true,<br/>
                }),<br/>
            ],<br/>
        }),<br/>
    ],<br/>
});<br/>

// Used to export the file into a .docx file<br/>
Packer.toBuffer(doc).then((buffer) => {<br/>
    fs.writeFileSync("My Document.docx", buffer);<br/>
});<br/>

// Done! A file called 'My First Document.docx' will be in your file system.<br/>
For more Examples refer official documentation here:<br/>
https://docx.js.org/#/<br/>

### 3.Download Excel file

## xlsx
 
The node version installs a command line tool xlsx which can read spreadsheet files and output the contents in various formats<br/>

Installation:<br/>
`npm install xlsx`<br/>

Basic Usage:<br/>
import * as FileSaver from 'file-saver';<br/>
import * as XLSX from 'xlsx';<br/>

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;<br/>charset=UTF-8';<br/>
const fileExtension = '.xlsx';<br/>
 
const ws = XLSX.utils.json_to_sheet(csvData);<br/>
const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };<br/>
const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });<br/>
const data = new Blob([excelBuffer], {type: fileType});<br/>
FileSaver.saveAs(data, fileName + fileExtension);<br/>

Refer documentation:<br/>
https://www.npmjs.com/package/xlsx<br/>
One sample project for example:<br/>
https://blog.bitsrc.io/exporting-data-to-excel-with-react-6943d7775a92<br/>

Styling for export is not there in community version of xlsx. It is in pro version.For styling, refer react-data-export<br/>

## react-data-export

Installation:<br/>
`npm install react-data-export --save`<br/>
Github link for examples:<br/>
https://github.com/securedeveloper/react-data-export<br/>


### 4.Download CSV file

## react-csv 
 
Build CSV files on the fly basing on Array/literal object of data<br/>
Installation:<br/>
`npm install --save react-csv`<br/>
Usage:<br/>
import { CSVLink, CSVDownload } from "react-csv";<br/>
 
const csvData = [<br/>
  ["firstname", "lastname", "email"],<br/>
  ["Ahmed", "Tomi", "ah@smthing.co.com"],<br/>
  ["Raed", "Labes", "rl@smthing.co.com"],<br/>
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]<br/>
];<br/>
`<CSVLink data={csvData}>Download me</CSVLink>` (Or)<br/>
`<CSVDownload data={csvData} target="_blank" />`<br/>

For More examples and usage refer:<br/>
https://www.npmjs.com/package/react-csv



