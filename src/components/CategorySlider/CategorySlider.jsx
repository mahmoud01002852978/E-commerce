import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function CategorySlider() {
  const [category, setCategory] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 500,
  };

  function getCategory() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => setCategory(res.data.data));
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <h2 className="my-3 capitalize font-semibold text-left">shop popular Category</h2>
      <Slider {...settings}>
        {category.map((categoryProduct) => {
          return (
            <div key={categoryProduct._id}>
              <img
                src={categoryProduct.image}
                className="w-full h-[200px] object-cover"
                alt={categoryProduct.name}
              />
              <h3>{categoryProduct.name}</h3>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
