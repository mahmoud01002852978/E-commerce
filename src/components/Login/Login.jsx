import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login(){
    
    const n =useNavigate()
const[userLogin ,setUserLogin] = useState(false);
const [apierror,setapierror]=useState("")


function handlelogin(values){
setUserLogin(true);
axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
.then( function(res) {
    setUserLogin(false);
    console.log(res);
    
    if(res.data.message == "success"){
    
        localStorage.setItem("userToken" ,res.data.token)
        n("/")

    } 
})
.catch(function(res) {
    setapierror(res.response.data.message);
   
})
}


let validationSchema = yup.object().shape({
    email:yup.string().email("email not valid").required("email is requierd"),
    password:yup.string().min(8,"password should more than 8"),
});

let formik =useFormik({
    initialValues:{
        email:"",
        password:"",
    },
    validationSchema ,
    onSubmit : handlelogin,
})

    return <>
<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto pt-32 lg:pt-24">

<div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label  htmlFor="email" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      {formik.errors.email && formik.touched.email ? (
        <div className='p-4 mb-4 text-sm text-red-700 rounded-lg'
        role='alert'> 
            <span className='font-medium'>
                {formik.errors.email}
            </span>
        </div>
      ):null
      
      }
  </div>
  <div className="relative z-0 w-96 mb-5 group">
      <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}  id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label  htmlFor="password" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">password</label>
      {formik.errors.password && formik.touched.password ? (
        <div className='p-4 mb-4 text-sm text-red-700 rounded-lg'
        role='alert'> 
            <span className='font-medium'>
                {formik.errors.password}
            </span>
        </div>
      ):null
      
      }
  </div>
  <div>
  {apierror ? <div className='bg-slate-400 border rounded-lg my-3 border-spacing-9 border-red-600 text-red-600 p-5'>
        {apierror}
    </div> : null}
  </div>
<div className='flex gap-5 items-center '>
<button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">login</button>
<Link className='border border-spacing-2 rounded-md text-emerald-600' to={"/forgetpassword"}> <span>forget password</span></Link>
</div>

</form>

    </>
}
