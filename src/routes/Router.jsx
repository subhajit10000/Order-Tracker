import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Orders from "../pages/Orders.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="orders" element={<Orders />} />
    </Route>,
  ),
);

export default router;
