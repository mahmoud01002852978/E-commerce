import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function Register(){
 let {userLogin ,setUserLogin } =useContext(UserContext);
const n =useNavigate()
const [apierror,setapierror]=useState("")


 function handleRegistar(values){
axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
.then( function(res) {
    if(res.data.message == "success"){
        localStorage.setItem("userToken" ,res.data.token)
setUserLogin(res.data.token);
    } 
    n("/")
})
.catch(function(res) {
    setapierror(res.response.data.message);
   
})
}


let validationSchema = yup.object().shape({
    name: yup.string().min(3,"name is short").max(10 , "name is long").required("name reqyierd"),
    email:yup.string().email("email not valid").required("email is requierd"),
    password:yup.string().min(8,"password should more than 8"),
    rePassword:yup.string().oneOf([yup.ref("password")],"not math with password"),
    phone:yup.string().matches(/^01[1025][0-9]{8}$/ ,"not valid"),
});

let formik =useFormik({
    initialValues:{
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:"",
    },
    validationSchema ,
    onSubmit : handleRegistar,
})

    return <>
<form onSubmit={formik.handleSubmit} className="max-w-md w-96 mx-auto pt-32 lg:pt-24">
<div className="relative z-0 w-full mb-5 group">
      <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label  htmlFor="name" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
      {formik.errors.name && formik.touched.name ? (
        <div className='p-4 mb-4 text-sm text-red-700 rounded-lg'
        role='alert'> 
            <span className='font-medium'>
                {formik.errors.name}
            </span>
        </div>
      ):null
      
      }
  </div>
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
  <div className="relative z-0 w-full mb-5 group">
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
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur}  id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label  htmlFor="rePassword" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
      {formik.errors.rePassword && formik.touched.rePassword ? (
        <div className='p-4 mb-4 text-sm text-red-700 rounded-lg'
        role='alert'> 
            <span className='font-medium'>
                {formik.errors.rePassword}
            </span>
        </div>
      ):null
      
      }
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label  htmlFor="phone" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
      {formik.errors.phone && formik.touched.phone ? (
        <div className='p-4 mb-4 text-sm text-red-700 rounded-lg'
        role='alert'> 
            <span className='font-medium'>
                {formik.errors.phone}
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
<button type="submit" className="text-white bg-emerald-600 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">supmit</button>
<Link className='border border-spacing-2 rounded-md text-emerald-600' to={"/login"}> <span>do you have account? login</span></Link>
</div>
</form>

    </>
}
