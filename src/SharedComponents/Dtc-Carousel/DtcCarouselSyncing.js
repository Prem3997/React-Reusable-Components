import React from 'react';
import "./Carousel.scss"
import Slider from 'react-slick';

const DtcCarouselSyncing = ({settingsForSlider1,settingsForSlider2,slide1Data,slide2Data,title}) => {
    return (
        <div className="container">
          <h3>{title}</h3>
           <Slider {...settingsForSlider1}>
            {slide1Data.map(a=>(
            <div key={a.slideNo}>
            <div className="slide1" style={{backgroundColor:a.backgroundColor,backgroundImage:`url(${a.backgroundImage})`,backgroundSize:'cover'}}>
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
        <Slider {...settingsForSlider2}
        >
           {slide2Data.map(a=>(
            <div key={a.slideNo}>
            <div className="slide2" style={{backgroundColor:a.backgroundColor,backgroundImage:`url(${a.backgroundImage})`,backgroundSize:'cover'}}>
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

export default DtcCarouselSyncing;