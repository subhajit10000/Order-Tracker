import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-200">
      <Header />

      <main className="max-w-7xl mx-auto p-4 md:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
