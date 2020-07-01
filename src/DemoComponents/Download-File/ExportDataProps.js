export var data = [  {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",

  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": "DTC"
},
{
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",

  "phone": "010-692-6593 x09125",
  "website": "anastasia.net",
  "company": "OneDXC"
},
{
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "phone": "1-463-123-4447",
  "website": "ramiro.info",
  "company": "DXC"
},
{
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",

  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": "DXC"
},
{
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",

  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": "DXC"
},
{
  "id": 6,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org",
  "company": "DXC"
},
{
  "id": 7,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "phone": "210.067.6132",
  "website": "elvis.io",
  "company": "DXC"
},
{
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": "DXC"
},
{
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com",
  "company": "DXC"
},
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": "DXC"
}
]

//Export options
export var exportOptions = ["PdfExport", "ExcelExport", "CsvExport"]

//PDF
export var options=["id","name","username","company","website"]

export var title = 'DxcData'

export var orientation='potrait'

export var PdfFilename = "TableData.pdf"

//Excel
export var colwidth=[
{wpx: 15},
{wpx: 150}, 
{wpx: 150},
{wpx: 150}, 
{wpx: 150},
{wpx: 150}, 
{wpx: 150}
]

export var XLfilename="Dxc Data"

//CSV
export var headers = [  
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "User Name", key: "username" },
    { label: "E-mail", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Website", key: "website" },
    { label: "Company", key: "company" }
]

export var CSVfilename = 'TableData.csv'

export const images=[
  { "PdfIcon":require("../../DemoComponents/Download-File/Images/PdfIcon.png")},
  { "ExcelIcon":require("../../DemoComponents/Download-File/Images/ExcelIcon.png")},
  { "CsvIcon":require("../../DemoComponents/Download-File/Images/CsvIcon.png")}
]