import { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import { CartContext } from '../../context/CartContext';



export default function Checkout() {
    const { checkout } = useContext(CartContext);
    const { cId } = useContext(CartContext);

    useEffect(()=>{
    console.log(cId);
    
    } ,[])
    const formik = useFormik({
        initialValues: {
            details: '',
            phone: '',
            city: '',
        },
        onSubmit:  () => {
             handleCheckout(`67aa3548fa7895e81f60de15`, `http://localhost:5173/`)
        },
    });

    async function handleCheckout(cartId, url) {    
            let {data} = await checkout(cartId, url, formik.values);
            window.location.href=data.session.url; 
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto pt-32 lg:pt-24">
                {/* Details Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="details"
                        value={formik.values.details}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="floating_details"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="details" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Details
                    </label>
                    {formik.errors.details && formik.touched.details && (
                        <div className="p-4 mb-4 text-sm text-red-700 rounded-lg" role="alert">
                            <span className="font-medium">{formik.errors.details}</span>
                        </div>
                    )}
                </div>

                {/* Phone Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="phone" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Phone
                    </label>
                    {formik.errors.phone && formik.touched.phone && (
                        <div className="p-4 mb-4 text-sm text-red-700 rounded-lg" role="alert">
                            <span className="font-medium">{formik.errors.phone}</span>
                        </div>
                    )}
                </div>

                {/* City Input */}
                <div className="relative z-0 min-w-96 mb-5 group">
                    <input
                        type="text"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="floating_city"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="city" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        City
                    </label>
                    {formik.errors.city && formik.touched.city && (
                        <div className="p-4 mb-4 text-sm text-red-700 rounded-lg" role="alert">
                            <span className="font-medium">{formik.errors.city}</span>
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex gap-5 items-center">
                    <button
                        type="submit"
                        className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </>
    );
}
