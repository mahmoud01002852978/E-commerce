import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function TamplateName() {
  let { removeProduct, addLoggedUserCar, updateCartProduct } = useContext(CartContext);
  const [cartP, setCartP] = useState(null);

  async function getCart() {
    let response = await addLoggedUserCar();
    if (response.data.status === "success") {
      setCartP(response.data.data);
    }
  }

  async function reproduct(id) {
    let response = await removeProduct(id);
    if (response.data.status === "success") {
      setCartP(response.data.data);
    }
  }

  async function updateCart(id, count) {
    let response = await updateCartProduct(id, count);
    if (response.data.status === "success") {
      setCartP(response.data.data);
      toast.success("Product updated successfully");
    } else {
      toast.error("Try again later...");
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {cartP?.products?.length > 0 ? (
        <>
          <h2>Your total: {cartP?.totalCartPrice} EGP</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartP?.products?.map((product) => (
                  <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.name} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateCart(product.product.id, product.count - 1)}
                          className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                          </svg>
                        </button>
                        <div className="ms-3">
                          <span>{product.count}</span>
                        </div>
                        <button
                          onClick={() => updateCart(product.product.id, product.count + 1)}
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.price * product.count} EGP
                    </td>
                    <td className="px-6 py-4">
                      <a
                        onClick={() => reproduct(product.product.id)}
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
            <Link to={`/checkout`}>
            <button  className="btn my-10">check out</button>
            </Link>
        </>
      ) : (
        <h2 className='p-10 bg-slate-400  rounded-lg border  border-emerald-600 text-white'>Your cart is empty</h2>
      )}
    </>
  );
}