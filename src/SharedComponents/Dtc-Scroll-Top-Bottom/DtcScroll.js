import React, { useState,useEffect } from 'react';
import '../Dtc-Scroll-Top-Bottom/Style/scroll-top-bottom.css'


const DtcScroll=(props) => {
    const [show,setShow]=useState('none')
    const [visible,setVisible]=useState('block')
  
useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
  },[])

    const ScrollTop=() =>
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const ScrollBottom=() =>
    {
        
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });
    }

    const handleScroll= (e)=>
    {            
        if (Math.round(window.innerHeight + window.scrollY) >= document.body.offsetHeight)
        {
            setVisible('none')
        }
        if(window.pageYOffset>200)
       { 
           setShow('block');
       }
      if (window.pageYOffset <200){
          setShow('none')
      }
      if (Math.round(window.innerHeight + window.scrollY) < document.body.offsetHeight)
      {
          setVisible('block')
      }  
    }

    
    return (
        <div className="main" >
          
        
        <div className="bottom_button" style={{display:visible}}>
                <button className="button-style" onClick={ScrollBottom}>Go to Bottom</button>
            </div>
            
        <div className="top_button" style={{display:show}}>
            <button className="button-style" onClick={ScrollTop}>Go to Top</button>
        </div>
        
        </div>
    );
}

export default DtcScroll;