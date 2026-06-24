import React, { useEffect, useState } from "react";

import StatsPanel from "../components/StatsPanel.jsx";
import OrderList from "../components/OrderList.jsx";
import OrderCard from "../components/OrderCard.jsx";
import { mockOrders } from "../data/mockdata.js";
const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    } else {
      setOrders(mockOrders);
    }
  }, []);

  const activeOrders = orders.filter((order) => order.status !== "Delivered");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">DashBoard</h1>
      <StatsPanel orders={activeOrders} />

      <div>
        <h2 className="text-xl font-semibold mb-4">Active Order Lists</h2>

        <OrderList
          orders={activeOrders}
          updateStatus={() => {}}
          deleteOrder={() => {}}
        />
      </div>
    </div>
  );
};

export default Dashboard;
