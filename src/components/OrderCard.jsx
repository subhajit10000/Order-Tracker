import React from "react";
import OrderTimeline from "./OrderTimeline.jsx";
const OrderCard = ({ order, updateStatus, deleteOrder }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="flex justify-between">
        <h3 className="font-bold">{order.id}</h3>
        <span className="text-orange-500 font-semibold ">${order.amount}</span>
      </div>

      <div className="mt-3 space-y-1">
        <p>
          Customer: <span className="font-medium">{order.customer}</span>
        </p>

        <p>
          restaurant: <span className="font-medium">{order.restaurant}</span>
        </p>

        <p>ETA: {order.eta}</p>
      </div>
      <OrderTimeline status={order.status} />

      {/* update status  */}

      <div className="flex gap-3 mt-5">
        <button
          onClick={() => updateStatus(order.id)}
          className="flex-1 bg-orange-500 hover:bg-orange-700 text-white p-2 rounded-lg"
        >
          Next Status
        </button>

        <button
          onClick={() => deleteOrder(order.id)}
          className="flex-1 bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
        >
          Delete
        </button>
      </div>

      {/* deletestatus */}
    </div>
  );
};

export default OrderCard;
