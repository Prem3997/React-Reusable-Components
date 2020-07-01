## Library/PackageName
react-slick

## Library/PackageVersion
react-slick : ^0.25.2

## Library/PackageLicense
MIT

## Installation guidelines/steps

1.Copy the Dtc-Carousel Folder
2.Install react-slick
3.Also install slick-carousel for css and font
    Import css files:

    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    or 
    
    Add cdn link in your html

    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

## How to use 
1.Copy the Dtc-Carousel folder.
2.Installation: react-slick
3.Include CSS: 1. install slick-carousel
               2. import "~slick-carousel/slick/slick.css";           
                  import "~slick-carousel/slick/slick-theme.css";

                  or 
    
                  Add cdn link in your html

                  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

4.Data and settings are passed as props to DtcCarousel.js file
  <DtcCarousel  
      settings = {settings} 
      data ={data} 
      className="carousel" 
      title="Autoplay Carousel">
  </DtcCarousel>
5.Only for Slider syncing carousel : settingsForSlider1, settingsForSlider2, slide1Data, slide2Data has  to be passed as props to DtcCarouselSyncing.js file
  <DtcCarouselSyncing 
      slide1Data={slide1Data} 
      slide2Data={slide2Data} 
      settingsForSlider1={settingsForSlider1} 
      settingsForSlider2={settingsForSlider2} 
      title="Slider syncing carousel">
  </DtcCarouselSyncing>

6.For more details on props refer files in src/DemoComponents/Carousel
7.For more details on react-slick refer : https://www.npmjs.com/package/react-slick

## settings
settings has following set of configuration parameters :

    dots : boolean
    infinite : boolean
    speed :int
    slidesToShow : int
    slidesToScroll : int
    autoplay : boolean
    autoplaySpeed : int
    pauseOnHover : boolean
    arrows : boolean
    initialSlide : int
    speed : int
    responsive : array
    nextArrow : component
    prevArrow : component
    swipeToSlide : boolean
    focusOnSelect : boolean
    vertical : boolean
    verticalSwiping : boolean

## Sample Configuration  FILE
Pass the following props to DtcCarousel.js file (src/SharedComponents/Dtc-Carousel/DtcCarousel):
    data, settings 

Ex:
const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,    
    speed: 400,          
  }


const data = [
    {
      backgroundColor:'#1EA2B1',
      slideNo:1,
      icons:<img style={{width:'1rem',height:'1rem'}} src={icon1} alt="loadin"></img>,
      slideTitle:<h4 >DXC Is Digital Delivered</h4>,
      slideDescription:<div>DXC is the world’s leading independent, 
        	               end-to-end IT services company. We lead customers on their 
        	               digital transformation journeys, multiply their capabilities,
         	               and help them harness the power of innovation to thrive on   	               change.’
	       </div>
    },
    {
      slideNo:2,
      backgroundImage:image2,
      slideTitle:<h4>'About DXC Technology'</h4>
    },    
  ]

*Only for Slider Syncing carousel following props is passed as props to DtcCarouselSyncing.js file(src/SharedComponents/Dtc-Carousel/DtcCarouselSyncing)*
  settingsForSlider1, settingsForSlider2,  slide1Data, slide2Data 

Example: 
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
      ]


