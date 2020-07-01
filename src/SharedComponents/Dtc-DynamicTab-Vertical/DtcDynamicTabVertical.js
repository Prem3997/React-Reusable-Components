import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './DynamicTabStyles.css'
import { Nav } from 'react-bootstrap'


export const DtcDynamicTabVertical = (props) => {
    var obj={}
    const [state,setState]=useState({
        menuId:'',
        menuName:'',
        menuUrl:''
    })
    const[arrTab,setArrTab] = useState(props.navTabs)
    const handleInputChange=(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setState({
          ...state,
          [name]: value
        });
      }
    const handleSubmit=(event) =>{
        event.preventDefault();
        obj={'menuId':state.menuId,'menuName':state.menuName,'menuUrl':state.menuUrl}
        setArrTab([...arrTab,obj])
        setState({
            menuId:'',
            menuName:'',
            menuUrl:''
        })
        
    }
    return (
        <div>
            <div style={{marginLeft:'18%',width:'70%'}}>
            <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label htmlFor="menuInput">Menu Id</label>
                <input type="text" name="menuId" value={state.menuId} onChange={handleInputChange} className="form-control" id="menuIdInput" placeholder="Enter Menu Id" />
            </div>
            <div className="form-group">
                <label htmlFor="menuNameInput">Menu Name</label>
                <input name="menuName" type="text" value={state.menuName} onChange={handleInputChange} className="form-control" id="menuNameInput" placeholder="Menu Name" />
            </div>
            <div className="form-group">
                <label htmlFor="menuUrlInput">Menu URL</label>
                <input name="menuUrl" type="text" value={state.menuUrl} onChange={handleInputChange} className="form-control" id="menuUrlInput" placeholder="Router Link" />
            </div>
            <input type="submit" value="Add Tab" style={{backgroundColor:'yellow',color:'black'}} className='btn' />
            </form>
            </div>
            <br></br>
            {arrTab.map((a,i)=>
            <div key={i}>
                <Nav className='flex-column-reverse'>
                    <NavLink style={{textDecoration:'none'}}
                        to={`/dynamictab-vertical${a.menuUrl}`}
                        activeClassName="navbar_link--active" 
                        className="navbar_link" 
                    >{a.menuName}</NavLink>
                </Nav>
            </div>)}
        </div>
    )
}
