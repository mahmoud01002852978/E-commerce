import { React } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footar/Footar';

export default function TamplateName() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div>
        <Navbar />
        <div className=" lg:pt-10 pt-16 mb-96 w-full">
          <Outlet />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0  ">
        <Footer />
      </div>
    </div>
  );
}
