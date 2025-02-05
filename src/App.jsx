import React from "react";
import { Route, Routes } from "react-router";
import Root from "./Root/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import GenaretedImg from "./pages/GenaretedImg";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="genarated-img" element={<GenaretedImg />} />
      </Route>
    </Routes>
  );
};

export default App;
