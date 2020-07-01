import { data,options, title, orientation } from './ExportDataProps';

    function buildTableBody(data, columns) {
        var body = [];
        body.push(columns);
        data.forEach(function(row) {
            var dataRow = [];
            columns.forEach(function(column) {
                dataRow.push(row[column].toString());
            })
            body.push(dataRow);
        });
        return body;
    }
   
       export var docDefinition ={
            // pageSize: {
            //     width: 595,
            //     height: 595
            //   },
            // pageSize:'A4',
            pageOrientation:orientation,
            pageMargins:[40,100,40,50],
            header:function(currentPage,pageCount){
             return {
                 text:"Page" + currentPage.toString() + ' of ' + pageCount,
                 alignment:"right",
                 margin:[0,30,10,50]
             }
            },
            footer:[{
                text:"Thank you!",
                alignment: 'center'
            }],
          
           content:[ { text: title, style: 'firstheader' },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: buildTableBody(data,options) 
              
                },
                pageBreakBefore(currentNode) {
                    return currentNode.pageNumbers.length > 1 && currentNode.unbreakable;
                  },
                layout: {
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    },
                    paddingLeft: function (i) {
                        return i === 0 ? 0 : 8;
                    },
                    paddingRight: function (i, node) {
                        return (i === node.table.widths.length - 1) ? 0 : 8;
                    }
                 
                }
            },
        ],
              styles:{
                firstheader: {
                    fontSize: 18,
                    bold: true,
                    margin: [10, 0, 0, 10],
                },
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
              }
          }
   


