import "./App.css";
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Notfound from './components/Notfound/Notfound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Brands from './components/Brands/Brands';
import Category from './components/Category/Category';
import CountContextProvider from "./context/counterContext";
import UserContextProvider from "./context/UserContext";
import Protect from "./components/protect/protect"; 
import PoductDetails from "./components/PoductDetails/PoductDetails"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContextProvider from "./context/CartContext";
import toast, { Toaster } from 'react-hot-toast';
import Checkout from "./components/Checkout/Checkout";
import Allorder from "./components/ALLorder/ALLorder";
import Wish from "./components/Wish/Wish"
import Forgetpassword from "./components/Forgetpassword/Forgetpassword";
import Verify from "./components/Verify/Verify";


let quary =new QueryClient();

let x = createHashRouter([
  {
    path: "", 
    element: <Layout />, 
    children: [
      { index : true, element: <Protect><Home /></Protect> },
      { path: "home", element: <Protect><Home /></Protect> },
      { path: "poductDetails/:id/:category", element: <Protect><PoductDetails /></Protect> }, 
      { path: "cart", element: <Protect><Cart /></Protect> },
      { path: "login", element: <Login /> },
      { path: "brands", element: <Protect><Brands /></Protect> },
      { path: "register", element: <Register /> },
      { path: "products", element: <Protect><Products /></Protect> },
      { path: "allorders", element: <Allorder /> },
      { path: "category", element: <Protect><Category /></Protect> },
      { path: "checkout", element: <Protect><Checkout /></Protect> },
      { path: "Wish", element: <Protect><Wish /></Protect> },
      { path: "verify", element: <Verify /> },
      { path: "forgetpassword", element: <Forgetpassword /> },
      { path: "*", element: <Notfound/> },
    ],
  },
]);

function App() {
  return (
    <>
    
      <UserContextProvider>
        <CountContextProvider>
        <QueryClientProvider client={quary}>
          <ReactQueryDevtools />
          <CartContextProvider>
          <RouterProvider router={x}></RouterProvider>
          <Toaster/>
          </CartContextProvider>
        </QueryClientProvider>
        </CountContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
