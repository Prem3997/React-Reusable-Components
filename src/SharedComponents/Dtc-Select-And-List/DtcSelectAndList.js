import React,{ useState} from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SelectAndList.css';

const DtcSelectAndList =(props)=>{
  var del = props.images.map(a=>a.delIcon)
  var plus = props.images.map(a=>a.plusIcon) 
  var data = props.SelectAndListData
  var change = props.selectedList.checkboxvalue
  var name = props.selectedList.checkboxname
  var checkbox = props.selectedList.checkbox
  var display = props.selectedList.displaybox
  var length = data.options.length
  var preloaded = props.selectedList.preloaded
  var preloadedvalue = preloaded === 0? 0 : -preloaded
  
  const [selectedOption, setSelectedOption] = useState(null)
  const [options,setOptions] = useState(data.options.slice(preloaded,length))
  const [items, setItems] = useState(data.options.slice(0,-preloadedvalue))  
  const [isChecked, setIsChecked] = useState(new Map()) 
  const [check,setCheck] = useState(false)

  
const handleChange = selectedOption => {
    setSelectedOption(
    selectedOption 
    );
};

//To add the list
const addList=()=>{
      if(selectedOption !== null){
     
         const newItem = Object.assign({}, selectedOption);
      
         const updatedItems =[ ...items,newItem]
         const  test = updatedItems.filter(
               data => {               
              return (data.id === selectedOption.id && selectedOption.id != null);                 
          });             
          if(test.length === 1){
              setItems(updatedItems)
          }
   
      // check if selected choice exists in choicesForDelete
          const exists = options.includes(selectedOption);
          if (exists) {
          setOptions(options.filter(choice => choice !== selectedOption)) 
          } else {
          setOptions([...options, selectedOption]) 
          }    
        }
        setSelectedOption(null)       
}

// To delete the list
const deleteList =(delItem)=>{ 
    const filteredItems = items.filter(item =>
        item.label !== delItem.label)
        setItems(filteredItems)
// After delete again adding that list to the options
        setOptions([...options,delItem]) 
}

const Checkbox = ({
    type = 'checkbox',
    name,
    checked = false,
    onChange,
  }) => (
    <input
      type={type}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );

//Check box checked
const updatePresenter=(e)=>{
     if(check === false)
     setCheck(true)
     else
     setCheck(false)
     const item = e.target.name;
     const ischecked = e.target.checked;
     setIsChecked(isChecked.set(item, ischecked)); 
}

//Color styles for react-select
const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white'}),
  option: (styles) => {
    return {
      ...styles,
      backgroundColor: 'white',
      color: '#000000'
    }
  }
}

return (
 <div>
    <div className="whole-container">
        <div className="selected-text mt-4">Selected</div> 
        <div className="selectbutton mb-4">
     <span className="select-list">  <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isClearable={false}
        styles={colourStyles}
        placeholder="Type and Enter"
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: '#DEEBFF'
          },
        })}/>
        </span>

   <span className="ml-2"> <img src={plus[1]} alt="Add" className="fas fa-plus-circle" onClick={addList}></img></span>  
         </div>


    <div className={(items.length===0?"":"col-md-8 col-auto col-xs-12 col-sm-8 col-lg-8  cards-container1 mb-4")}>
{items.map((item,index)=>(
              <div key={index}>
       <div className="content">

       <span className="cards-content-column">
      <div className="col-left">  
      {Object.keys(item).filter(key => display.includes(key)).map(((keyName,i) =>(
         <div key={i} className="client-name">{item[keyName]}</div>
        )))}  
      </div>

{checkbox === true ?
      <div className="col-right">
      <Checkbox name={item.label} id="check_box" checked={isChecked.get(item.label)!== undefined ?
              isChecked.get(item.label) : item.change} onChange={updatePresenter} />
              <label>{name}</label>
              </div> : null }

       </span>

      <span className="text-warning dele">
          <img src={del[0]}  alt="Delete"  className="fas fa-trash-alt"   onClick={()=>deleteList(item)} ></img>
      </span>
    
    </div>
    </div> 
  ))}     
         </div> 
         </div>
  <div className="container-2">
  { "{selectedlist:"}
    {items.length === 0 ?  

    selectedOption === null ?
    
   "null}"    
    : 
    
    "{"+
   Object.keys(selectedOption).filter(key => props.selectedList.show.includes(key)).map((keyName=>(
     keyName+ ":" + selectedOption[keyName]
   )))
   +"}}"

      :  

  items.map(item=>

  isChecked.get(item.label) !== undefined ? "[" +
            
  Object.keys(item).filter(key => change.includes(key)).map((keyName)=>(
console.log( item[keyName] = isChecked.get(item.label))
  ))
+
  Object.keys(item).filter(key => props.selectedList.show.includes(key)).map((keyName)=>(
    keyName+ ":" + item[keyName]
  )) +"]"

 : "["+ 
  Object.keys(item).filter(key => props.selectedList.show.includes(key)).map((keyName)=>(
    keyName+ ":" + item[keyName]
  )) 
+"]"
      )
  +"}"
} 
</div>
</div>
    );
}

export default DtcSelectAndList;