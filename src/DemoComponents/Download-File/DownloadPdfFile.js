import React from 'react';
import * as jsPDF from 'jspdf';
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton'
import './Download-file.css';
import download from './Images/download.png';

var imgdata = download
const DownloadPdfFile =() =>{

    const pdfGenerator =()=>{
      
        var doc = new jsPDF()
     
        doc.text(35, 15, 'DXC TECHNOLOGY')    //To write text with coordinate with left and upper edge of the page
       
        doc.addImage(imgdata,'jpg',20,16,120,100)  //To add the image
        doc.text(20,120,"This is Default font")
       
        doc.setFont('courier')  //Setting font
        doc.setFontType('bold')   //To set font type
        doc.setTextColor(255, 0, 0) // Red text
        doc.text(20,130,"This is courier bold")

        doc.setTextColor(0, 0, 0)       

        doc.setFontType('normal')

        doc.line(40, 20, 80, 20) // horizontal line line(x1, y1, x2, y2, style)
        doc.setLineWidth(1.5) // line width
        /* doc.setDrawColor(255, 0, 0) // draw red lines
         doc.line(100, 120, 100, 160) // vertical line  */
        

        var sizes = [13, 16, 20],
        fonts = [['Times', 'Roman'], ['Helvetica', ''], ['Times', 'Italic']],
        font, size, lines,
        margin = 2.5, // inches on a 8.5 x 11 inch sheet.
        verticalOffset = margin,
        loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'
      
      // 2 blocks of text
      for (var i in fonts) {
        if (fonts.hasOwnProperty(i)) {
          font = fonts[i]
          size = sizes[i]
      
          lines = doc.setFont(font[0], font[1])
                          .setFontSize(size)
                          .splitTextToSize(loremipsum, 197.5)
             
          doc.text(4.5, verticalOffset + size *11, lines)
      
          verticalOffset += (lines.length + 9.5) * size 
        }
      }
      
        doc.addPage()   //Two page
     
        doc.setFontSize(16)    //Font size
        doc.setTextColor(0, 0, 0) 
        doc.text(10,20,"Do you like that?")

        doc.setTextColor(0, 0, 0)    
       
        doc.setFontType('normal')
        doc.text(40,50,"We can draw ellipse, circle,line etc. through jsPdf")
        doc.text(40,70,"Through this demo, we can show examples")
        doc.ellipse(50, 80, 10, 5, 'F')  // Draw ellipse ellipse(x, y, rx, ry, styleopt, patternKeyopt, patternDataopt)
        doc.circle(50, 100, 5, 'FD')   //Draw circle circle(x, y, r, styleopt, patternKeyopt, patternDataopt)

       
        doc.setDrawColor(0)      // Filled square with red border
        doc.setFillColor(255, 0, 0)
        doc.rect(50, 120, 10, 10, 'FD')
        
        doc.setDrawColor(0) // Black sqaure with rounded corners
        doc.setFillColor(255, 255, 255)
        doc.roundedRect(50, 140, 10, 10, 3, 3, 'FD')
           
        doc.save("MyPdf.pdf")    //Save pdf
    }

   

    return (
        <div>
            <DtcButton
                className='dtc-secondary-whiteBg'
                onClick={pdfGenerator}
                buttonLabel='Download PDF'
            /><br></br>
        </div>
    );
}

export default DownloadPdfFile;