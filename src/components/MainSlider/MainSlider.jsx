import { React } from 'react';
import style from "./MainSlider.module.css"
import s1 from "../../assets/slider-image-1.jpeg"
import s2 from "../../assets/slider-image-2.jpeg"
import s3 from "../../assets/slider-image-3.jpeg"
import g1 from "../../assets/grocery-banner.png"
import g2 from "../../assets/grocery-banner-2.jpeg"
import Slider from "react-slick";




export default function MainSlider(){

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplayspeed:600,
      };


    return <>
    
    <div className="row border my-6 shadow-emerald-600">
   
        <div className="w-3/4 z ">
        <Slider {...settings}>
        <img src={s1}  className="w-full h-[400px] object-cover" alt="" />
        <img src={g1}  className="w-full h-[400px] object-cover" alt="" />
        <img src={s3}  className="w-full h-[400px] object-cover" alt="" />
        </Slider>
        </div>
        <div className="w-1/4 z">
        <img src={s2}  className="w-full  h-[200px]" alt="" />
        <img src={s3}  className="w-full  h-[200px]" alt="" />
        
        </div>
     
     </div>
    </>
}
