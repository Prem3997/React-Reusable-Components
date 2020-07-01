import React from 'react';
import {Document, Packer,HeadingLevel, WidthType, BorderStyle, TextRun, Header, Footer, Paragraph, Table, TableCell, TableRow} from 'docx';
import * as FileSaver from 'file-saver';
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton'
import './Download-file.css';

const DownloadWordFile = () =>{

    // To refer more about docx, Refer here: https://docx.js.org/#/

    const word_generator =() =>{

    const doc = new Document();

    const table = new Table({
        width: {
          size: 100,
          type: WidthType.PERCENTAGE,
      },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                      borders: {
                        top: {
                           style: BorderStyle.THICK,
                           size: 5,
                           color: "889900",
                       },
                       bottom: {
                           style: BorderStyle.THICK,
                           size: 5,
                           color: "889900",
                       },
                   },
                   children: [ new Paragraph({
                    children:[
                      new TextRun({
                        text:"Professional Experience",
                        bold:true,
                      }),         
                    ],
                    spacing:{
                      after:200,
                    },
                  })],
                    }),
                    new TableCell({
                      borders: {
                        top: {
                           style: BorderStyle.THICK,
                           size: 5,
                           color: "889900",
                       },
                       bottom: {
                           style: BorderStyle.THICK,
                           size: 5,
                           color: "889900",
                       },
                   },
                   children: [ new Paragraph({
                    children:[
                      new TextRun({
                        text:"Job Title",
                        bold:true,
                      }),
              
                    ],
                    spacing:{
                      after:200,
                    },
                  })],
                    }),
                ],
                tableHeader: true,
            }),
            new TableRow({
              children: [
                  new TableCell({
                    borders: {
                      top: {
                         style: BorderStyle.THICK,
                         size: 5,
                         color: "889900",
                     },
                     bottom: {
                         style: BorderStyle.THICK,
                         size: 5,
                         color: "889900",
                     },
                 },
                 children: [new Paragraph("")],
                  }),
                  new TableCell({
                    borders: {
                      top: {
                         style: BorderStyle.THICK,
                         size: 5,
                         color: "889900",
                     },
                     bottom: {
                         style: BorderStyle.THICK,
                         size: 5,
                         color: "889900",
                     },
                 },
                 children: [new Paragraph("")],
                  }),
              ],
          }),
        ],
    });

    const createHeading = (text) =>{
        return new Paragraph ({
          text,
          heading:HeadingLevel.HEADING_1,
          thematicBreak:true,
        })
      }

    const createSubHeading = (text) =>{
    return new Paragraph({
        text,
        heading:HeadingLevel.HEADING_2,
        border:{
        bottom:{
            color:"auto",
            space:1,
            value:"single",
            size:6
        },
        },

    });
    }

    const createBullet = (text) =>{
        return new Paragraph({
            text: text,
            bullet: {
                level: 0,
            },
        });
    }

    const createLinebr = () =>{
        return new Paragraph({
    
        });
        
      }

    const createInstituteHeader = (arg,arg2) => {
        return new Paragraph({
          children:[
            new TextRun({
              text:arg,
              bold:true,
            }),
            new TextRun({
              text:arg2,
            }),
    
          ],
          spacing:{
            after:200,
          },
        });
      }

    doc.addSection({
        headers:{
          default: new Header({
            children:[new Paragraph("Dxc Technologies")],
          })
        },
        footers:{
          default: new Footer({
            children: [new Paragraph("Signature")],
          })
        },
        children:[
          createHeading('<Name>'),
          createSubHeading('emailid@dxc.com +91 <mobile>'),
          createHeading('PROFILE'),
          createLinebr(),
          table,
          createInstituteHeader("<Professional Summary>",""),
          createLinebr(),
          createHeading('Skills'),
          createLinebr(),
          createSubHeading("Top Skills (Technical / Non-Technical skills) "),
          createBullet("Angular"),
          createBullet("Node Js"),
          createBullet("Graph QL"),
          createBullet("Java"),
          createBullet(".Net"),
          createSubHeading("Key Roles Performed) "),
          createBullet(""),
          createBullet(""),
          createBullet(""),
          createBullet(""),
          createBullet(""),
          createHeading('Certifications'),
          createLinebr(),
          createBullet(""),
          createBullet(""),
          createBullet(""),
          createBullet(""),
          createBullet(""),
        ],
      });

    
      Packer.toBlob(doc).then((blob) => {
      FileSaver.saveAs(blob,"samplefile.docx");
      });
}
   
    return (
        <div>
            <DtcButton
                className='dtc-secondary-whiteBg'
                onClick={word_generator}
                buttonLabel='Download Word'
            /><br></br>
        </div>
    );
}

export default DownloadWordFile;