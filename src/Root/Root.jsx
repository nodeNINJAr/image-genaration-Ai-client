import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="container mx-auto">
    {/* navbar */}
    <Navbar/>
      {/* main */}
      <main className="w-11/12 mx-auto min-h-screen">
        <Outlet />
      </main>
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Root;
