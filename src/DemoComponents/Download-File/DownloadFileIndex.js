import React from 'react';
import DownloadPdfFile from './DownloadPdfFile';
import DownloadWordFile from './DownloadWordFile';
import DtcDownloadExcelFile from '../../SharedComponents/Dtc-Download-File/DtcDownloadExcelFile';
import DtcExcelWithStyles from '../../SharedComponents/Dtc-Download-File/DtcExcelWithStyles';
import PdfWithStyles from './PdfWithStyles';
import DtcExportData from '../../SharedComponents/Dtc-Download-File/DtcExportData';
import { multiDataSet, WorksheetName } from './ExcelStyleProps';
import { data, colwidth, exportOptions,title, PdfFilename, XLfilename, headers, CSVfilename, images } from './ExportDataProps';
import { docDefinition } from './PdfMaker';

const DownloadFileIndex = () =>{
    return (
        <div>
            <DownloadPdfFile/>
            <DownloadWordFile/>
            <DtcDownloadExcelFile data={data} colwidth={colwidth} filename={XLfilename}/>
            <DtcExcelWithStyles multiDataSet={multiDataSet} WorksheetName={WorksheetName}/>
            <PdfWithStyles data={data} filename={PdfFilename} title={title}/>
            <DtcExportData data={data} docDefinition={docDefinition} exportOptions={exportOptions}
            PdfFilename={PdfFilename} colwidth={colwidth} XLfilename={XLfilename}
            headers={headers} CSVfilename={CSVfilename} images={images}/>
        </div>
    );
}

export default DownloadFileIndex;