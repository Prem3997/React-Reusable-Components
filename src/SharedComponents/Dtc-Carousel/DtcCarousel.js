import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DtcCarousel = ({settings,data,className,title}) => {

  
  return (
    <div className="container">
      <h3>{title}</h3>
           <Slider {...settings} >
           {data.map(a=>(
            <div key={a.slideNo}>
            <div className={className} style={{backgroundColor:a.backgroundColor,backgroundImage:`url(${a.backgroundImage})`,backgroundSize:'cover'}}>
              <div>
                <span style={{float:'left'}}>{a.slideNo}</span>
                <span style={{float:'right'}}>{a.icons}</span>
              </div>
              <div >{a.slideTitle}</div>
              <div>{a.slideDescription}</div>
              <div>
              </div>
            </div>  
          </div>
        ))}
        </Slider>


      
    </div>
  );

}
export default DtcCarousel;
