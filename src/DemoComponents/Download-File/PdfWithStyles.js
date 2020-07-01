import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton'

const PdfWithStyles = (props) =>{

    const pdfGenerator = () =>{
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Dxc Data";
     const headers = [["Id", "Name","Username","Email","Phone","Website","Company"]];

     //If only particular data to get displayed use elt.id, elt.email etc.. 
     const data1 = props.data.map(elt=> [elt.id, elt.name, elt.username, elt.email, elt.phone,elt.website, elt.company]);

    let content = {
      startY: 50,
       head: headers,
      body: data1
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(props.title)

}
    return (
        <div>
             <DtcButton
                className='dtc-secondary-whiteBg'
                onClick={pdfGenerator}
                buttonLabel='Download PDF with Styles'
            /><br></br>
        </div>
    );
}

export default PdfWithStyles;