import { React, useContext, useEffect, useState } from 'react';
import style from './RecProuducts.module.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useProduct from '../../Hooks/useproduct';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';

export default function RecProuducts() {
  const [loading, setLoading] = useState(false);
  const [cuid, setcuid] = useState(0);
  const { isLoading, isError, data, error } = useProduct();
  const { addProductToCart } = useContext(CartContext);

  async function addToCart(id) {
    setcuid(id);
    setLoading(true); 
    const response = await addProductToCart(id);
    console.log(response);
    if (response?.data?.status === 'success') {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
    }
    setLoading(false); 
  }

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (isError) {
    return <div className="error-message">{error.message}</div>;
  }

  return (
    <div className="row">
      {data?.data?.data?.length > 0 ? (
        data.data.data.map((product) => (
          <div key={product.id} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
            <div className="product p-2 border border-gray-300 rounded-lg shadow-md">
              <Link to={`/poductDetails/${product.id}/${product.category?.name}`}>
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <h2 className="text-emerald-600">{product.category ? product.category.name : 'No Category'}</h2>
                <h3 className="p-2 text-xl truncate">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                <div className="flex justify-around items-center">
                  <span>{product.price} EGP</span>
                  <span>
                    <i className="fas text-yellow-500 fa-star"></i> {product.ratingsAverage}
                  </span>
                </div>
              </Link>
              <button onClick={() => addToCart(product.id)} className="btn">
                {loading && cuid == product.id ? <i className="fas fa-spinner fa-spin"></i> : "Add to cart"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}