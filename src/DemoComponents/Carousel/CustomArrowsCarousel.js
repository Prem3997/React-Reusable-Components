import React from 'react';
import nextIcon from './Assets/nextIcon.png'
import previousIcon from './Assets/previousIcon.png'
import image1 from './Assets/image1.png'
import image2 from './Assets/image2.png'
import icon1 from './Assets/iconfinder.svg'
import dtcvedio from './Assets/dtcvedio.mp4'
import DtcCarousel from '../../SharedComponents/Dtc-Carousel/DtcCarousel';

function CustomArrowsCarousel(props) {
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <img src ={nextIcon} alt="next"
            className={className}
            style={{ ...style, display: "block", width:'2rem',height:'3rem' }}
            onClick={onClick}
          />
        );
      }
      
      const  SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <img src={previousIcon} alt="prev"
            className={className}
            style={{ ...style, display: "block", width:'2rem',height:'3rem' }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
      };
      let data = [
        {
          backgroundColor:'#1EA2B1',
          slideNo:1,
          icons:<img style={{width:'1rem',height:'1rem'}} src={icon1} alt="loadin"></img>,
          slideTitle:<h4>DXC Is Digital Delivered</h4>,
          slideDescription:<h6>'DXC is the world’s leading independent, end-to-end IT services company. We lead customers on their digital transformation journeys, multiply their capabilities, and help them harness the power of innovation to thrive on change.'</h6>
        },
        {
          backgroundColor:'#FF6D60',
          slideNo:2,
          slideDescription: <video className="" autoPlay={false} loop muted={true} style={{width:'100%',height:'14rem'}} controls>
                      <source src={ dtcvedio} type="video/mp4" />
              </video>
        },
        {
          backgroundColor:'#FFD460',
          slideNo:3,
          slideTitle:<h4>DXC Is Digital Delivered</h4>,
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
    return (
        <div>
            <DtcCarousel settings={settings} data={data} className="carousel" title="Custom Arrows Carousel"></DtcCarousel>
        </div>
    );
}

export default CustomArrowsCarousel;