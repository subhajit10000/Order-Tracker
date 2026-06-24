import React from "react";
import OrderCard from "./OrderCard";

const OrderList = ({ orders, updateStatus, deleteOrder }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          updateStatus={updateStatus}
          deleteOrder={deleteOrder}
        />
      ))}
    </div>
  );
};

export default OrderList;
