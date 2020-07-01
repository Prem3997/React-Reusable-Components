export const data=[
    {
      id: 1,
      category: 'Child',
    },
    {
      id:2,
      category: 'Adult'
    },
    {
      id:3,
      category:'Senior Citizen'
    },
    {
      id:4,
      category:'Infant'
    },
    {
      id:1.1,
      age: '2-5',
      parentId:1
    },
    {
      id:1.2,
      age: '6-11',
      parentId:1
    },
    {
      id:1.3,
      age: '12-16',
      parentId:1
    },
    {
      id:2.1,
      age:'18-25',
      parentId:2
    },
    {
      id:2.2,
      age: '26-45',
      parentId:2
    },
    {
      id:2.3,
      age:'46-59',
      parentId:2
    },
    {
      id:3.1,
      age:'60-80',
      parentId:3
    },
    {
      id:3.2,
      age:'above 80',
      parentId:3
    }
  ]  

  export const columns=[
    { title: 'Category', field: 'category' },
    { title: 'Age', field: 'age' },
  ]

  export const myDivStyle = {
    width: '70%',
    marginLeft:'15%',
    marginTop:"7%"
  }

  export const selectedRowColor='#ffdbf7'
  
  export const parentChildData=(row, rows) => rows.find(a => a.id === row.parentId)