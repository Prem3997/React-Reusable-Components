import React, { useEffect, useState } from 'react';
import image1 from './Assets/image1.png'
import image2 from './Assets/image2.png'
import icon1 from './Assets/iconfinder.svg'
import dtcvedio from './Assets/dtcvedio.mp4'
import DtcCarouselSyncing from '../../SharedComponents/Dtc-Carousel/DtcCarouselSyncing';

const SliderSyncing = () =>{
    const [nav1,setNav1] = useState([])
    const [nav2,setNav2] = useState([])
    let slider1 = []
    let slider2=[]
    useEffect(()=>{
        setNav1(slider1)
        setNav2(slider2)
    },[slider1,slider2])
    
    let settingsForSlider1 = {
        asNavFor:nav2,
        ref:slider => (slider1 = slider),
        arrows:false,
    }
    let settingsForSlider2 = {
        asNavFor:nav1,
          ref:slider => (slider2 = slider),
          slidesToShow:5,
          slidesToScroll:1,
          swipeToSlide:true,
          focusOnSelect:true,
          dots:true,
          arrows:false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    let slide1Data = [
        {
          backgroundColor:'#1EA2B1',
          slideNo:1,
          icons:<img style={{width:'1rem',height:'1rem'}} src={icon1} alt="loadin"></img>,
          slideTitle:<h4 >DXC Is Digital Delivered</h4>,
          slideDescription:<div>'DXC is the world’s leading independent, end-to-end IT services company. We lead customers on their digital transformation journeys, multiply their capabilities, and help them harness the power of innovation to thrive on change.'</div>
        },
        {
          backgroundColor:'#FF6D60',
          slideNo:2,
          slideDescription: <video className="" autoPlay={false} loop muted={true} style={{width:'100%',height:'13rem'}} controls>
                      <source src={ dtcvedio} type="video/mp4" />
              </video>
        },
        {
          backgroundColor:'#FFD460',
          slideNo:3,
          slideTitle:<h4>"DXC Is Digital Delivered"</h4>,
          slideDescription:<img src={image1} alt="loading" style={{width:'100%',height:'12rem'}}></img>
        },
        {
          slideNo:4,
          backgroundImage:image2,
          slideTitle:<h4>'About DXC Technology'</h4>
        },
        {
          backgroundColor:'#0000ff8f',
          slideNo:5,
          slideTitle:<h4>'About DXC Technology'</h4>,
          slideDescription:<div >DXC is the world’s leading independent, 
            end-to-end IT services company. We lead customers on their 
            digital transformation journeys, multiply their capabilities,
             and help them harness the power of innovation to thrive on change.'
             <div><button onClick={()=>alert("your data has been saved")}>Button</button></div></div>
          
        },
        {
          backgroundColor:"#FF6D60",
          slideNo:6,
          slideTitle:<img src={image2} alt="loading" style={{width:'100%',height:'6rem'}}></img>,
          slideDescription:<div><h3>DXC Technology</h3><p>DXC is the world’s leading independent, end-to-end IT services company.</p>
          </div>
        }
        
      ]
      let slide2Data = [
        {
          backgroundColor:'#1EA2B1',
          slideNo:1,
          icons:<img style={{width:'1rem',height:'1rem'}} src={icon1} alt="loadin"></img>,
          slideTitle:<h4 >DXC Is Digital Delivered</h4>,
         
        },
        {
          backgroundColor:'#FF6D60',
          slideNo:2,
          slideDescription: <div>DTC vedio</div>
        },
        {
          backgroundColor:'#FFD460',
          slideNo:3,
          slideTitle:<h4>"DXC Is Digital Delivered"</h4>,
          slideDescription:<div>Image</div>
        },
        {
          slideNo:4,
          backgroundImage:image2,
          slideTitle:<h4>'About DXC Technology'</h4>
        },
        {
          backgroundColor:'#0000ff8f',
          slideNo:5,
          slideTitle:<h4>'About DXC Technology'</h4>,
          slideDescription:
             <div><button onClick={()=>alert("your data has been saved")}>Button</button></div>
          
        },
        {
          backgroundColor:"#FF6D60",
          slideNo:6,
          slideTitle:<img src={image2} alt="loading" style={{width:'100%',height:'6rem'}}></img>,
          slideDescription:<div><h6>DXC Technology</h6>
          </div>
        }
        
      ]
    return (
        <div>
            <DtcCarouselSyncing slide1Data={slide1Data} slide2Data={slide2Data} settingsForSlider1={settingsForSlider1} settingsForSlider2={settingsForSlider2} title="Slider syncing carousel"></DtcCarouselSyncing>
        </div>
    );
}

export default SliderSyncing;