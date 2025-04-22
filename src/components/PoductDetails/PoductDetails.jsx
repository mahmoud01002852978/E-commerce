import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";


export default function ProductDetails() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id, category } = useParams();
  const [product, setProduct] = useState(null);
  const [lp, setLp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = (id) => {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data.data);
        setLoading(false);
      })
      .catch((res) => {
        setError("Failed to fetch product");
        setLoading(false);
      });
  };

  const getAllProducts = () => {
    axios
      .get('https://ecommerce.routemisr.com/api/v1/products')
      .then((res) => {
        const filteredProducts = res.data.data.filter(
          (product) => product.category.name === category
        );
        setLp(filteredProducts);
      })
     
  };

  useEffect(() => {
    getProduct(id);
    getAllProducts();
  }, [id, category]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <>
      <div className="row items-center justify-center text-left">
        <div className="lg:w-1/3 w-3/4 p-3">
        <Slider {...settings}>
          {product?.images.map((src)=> <img src={src} className="w-full" alt="" />  )}
        </Slider>
        </div>
        <div className="lg:w-2/3 p-2">
          <h1 className="p-2 text-xl">{product?.title}</h1>
          <h3 className="text-emerald-600 capitalize">{product?.description}</h3>
          <div className="flex justify-around items-center">
            <span>{product?.price} EGP</span>
            <span>
              <i className="py-5 fas text-yellow-500 fa-star"></i> {product?.ratingsAverage}
            </span>
          </div>
          <button className="btn">Add to cart</button>
        </div>
      </div>

      <div className="row">
        {lp.length > 0 &&
          lp.map((product) => (
            <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
              <div className="product p-2 border border-gray-300 rounded-lg shadow-md">
                <Link to={`/poductDetails/${product.id}/${product.category.name}`}>
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <h2 className="text-emerald-600">{product.category?.name}</h2>
                  <h3 className="p-2 text-xl truncate">{product.title.split(" ").slice(0, 2).join(" ")}</h3>
                  <div className="flex justify-around items-center">
                    <span>{product.price} EGP</span>
                    <span>
                      <i className="fas text-yellow-500 fa-star"></i> {product.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
