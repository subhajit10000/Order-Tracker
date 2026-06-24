import React from "react";

// import { ORDER_FLOW } from "../data/mockdata.js";

const statuses = [
  "All",
  "Received",
  "Accepted",
  "Preparing",
  "Out For Delivery",
  "Delivered",
];

const OrderFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-4 py-2 rounded-lg font-medium transition"

          ${
            filter === status
              ? "bg-orange-500 text-white"
              : "bg-white text-slate-700 hover:bg-orange-100"
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default OrderFilter;
