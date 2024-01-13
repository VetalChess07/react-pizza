import React, { createContext, useEffect, useState } from "react";
import "./scss/app.scss";
import { Routes, Route, Outlet } from "react-router-dom";

import {} from "./redux/slices/filterSlice";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/404";

import Cart from "./pages/Cart";
import MainLayouts from "./layouts/MainLayouts";

export const SearchContext = createContext("");

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
