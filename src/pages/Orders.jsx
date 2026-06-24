import React, { useEffect, useState } from "react";
import AddOrderForm from "../components/AddOrderForm";
import { mockOrders, ORDER_FLOW } from "../data/mockdata.js";
import StatsPanel from "../components/StatsPanel.jsx";
import SearchBar from "../components/SearchBar.jsx";
import OrderFilter from "../components/OrderFilter";
import OrderList from "../components/OrderList.jsx";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  //   LocalData along with UseEffect

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    } else {
      setOrders(mockOrders);
    }
  }, []);

  //   save new Order

  useEffect(() => {
    console.log("from order component", orders);
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);

  //   ETA timer

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          const newEta = order.eta > 0 ? order.eta - 0.01 : 0;

          return {
            ...order,
            eta: newEta,
            status:
              newEta === 0 && order.status !== "Delivered"
                ? "Delivered"
                : order.status,
          };
        }),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  //   OrderStatusUpdate

  const updateStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id !== id) return order;

        const currentIndex = ORDER_FLOW.indexOf(order.status);

        if (currentIndex === ORDER_FLOW.length - 1) {
          return order;
        }

        return {
          ...order,
          status: ORDER_FLOW[currentIndex + 1],
        };
      }),
    );
  };

  // deleteOrder

  const deleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  // FilterOrder
  const filteredOrder = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.restaurant.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" ? true : order.status === filter;

    return matchesFilter && matchesSearch;
  });

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 ">
          Orders Management
        </h1>
        <p className="mt-2 text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          sunt necessitatibus itaque odit, exercitationem ipsa delectus aut,
          nobis ullam molestiae enim possimus ab! Consectetur voluptatem dicta
          aperiam pariatur asperiores libero.
        </p>
      </div>
      {/* passing the prop */}
      <StatsPanel orders={orders} />
      {/* passing a fucntion as prop */}
      <AddOrderForm setOrders={setOrders} />
      <SearchBar search={search} setSearch={setSearch} />
      <OrderFilter filter={filter} setFilter={setFilter} />
      {/*  orders  in card*/}

      {filteredOrder.length === 0 ? (
        <div className="bg-white rounded-lg p-10 text-center shadow-sm ">
          <h2 className="text-slate-600 mt-2">No Orders Found.</h2>
        </div>
      ) : (
        <OrderList
          orders={filteredOrder}
          updateStatus={updateStatus}
          deleteOrder={deleteOrder}
        />
      )}
    </section>
  );
};

export default Orders;
