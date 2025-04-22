import {  useContext } from 'react';
import logo from "../../assets/freshcart-logo.svg"
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';
export default function TamplateName(){
  const { Ni } = useContext(CartContext);
  
let {userLogin , setuserLogin} =useContext(UserContext);
let navigate =useNavigate()
  function singout(){
    localStorage.removeItem("userToken");
    setuserLogin(null)
    navigate("/login")
  } 




    return <>
<nav className="bg-white z-10 border-gray-200 fixed top-0 right-0 start-0 bg-slate-400 ">
    <div className="flex flex-wrap lg:justify-between justify-center items-center mx-auto max-w-screen-xl p-4">
  <div className='flex gap-5'>
       <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
        </Link>
        {userLogin ? 
        <ul className='flex gap-3 items-center'>
            <li className='text-slate-600'><Link to="home">Home</Link></li>
            <li className='text-slate-600'><Link to="cart">Cart</Link></li>
            <li className='text-slate-600 mx-3'><Link to="Wish">Wish list</Link></li>
            <li className='text-slate-600'><Link to="products">Products</Link></li>
            <li className='text-slate-600'><Link to="category">Categories</Link></li>
            <li className='text-slate-600'><Link to="brands">Brands</Link></li>
        </ul>
        :null}
       </div>





        <div className="flex items-center space-x-6 rtl:space-x-reverse">
      <ul className='flex gap-3'>
        <li><i className='fab fa-facebook'></i></li>
        <li><i className='fab fa-instagram'></i></li>
        <li><i className='fab fa-linkedin'></i></li>
        <li><i className='fab fa-youtube'></i></li>
        <li><i className='fab fa-twitter'></i></li>
      </ul>
      <ul className='flex gap-3'>
<div className='relative'>
<div className='absolute bottom-4 left-4 rounded-full bg-red-600 w-4 text-slate-50'>
<h5>{Ni}</h5>
</div>
<i  className="text-xl fa-solid fa-cart-shopping"></i>
</div>
{userLogin != null ? <li><Link onClick={singout}>signout</Link></li> : <><li><Link to="login">Login</Link></li>
    <li><Link to="register">Register</Link></li></>}
      </ul>
        </div>
    </div>
</nav>

    </>
}
