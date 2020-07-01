import React from 'react';
import SliderSyncing from './SliderSyncing';
import MultipleCarousel from './MultipleCarousel';
import SingleCarousel from './SingleCarousel';
import VerticalCarousel from './VerticalCarousel';
import CustomArrowsCarousel from './CustomArrowsCarousel';
import AutoPlayCarousel from './AutoPlayCarousel';
import './carousel.scss'

function CarouselIndex() {
  return (
    <div className="carousel-main" >
      <MultipleCarousel></MultipleCarousel>
      <SingleCarousel></SingleCarousel>
      <VerticalCarousel></VerticalCarousel>
      <CustomArrowsCarousel></CustomArrowsCarousel>
      <AutoPlayCarousel></AutoPlayCarousel>
      <SliderSyncing></SliderSyncing>
    </div>
  );
}

export default CarouselIndex;