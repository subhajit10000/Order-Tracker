import React from "react";

const StatsPanel = ({ orders }) => {
  const total = orders.length;

  const preparing = orders.filter(
    (order) => order.status === "Preparing",
  ).length;

  const delivery = orders.filter(
    (order) => order.status === "Out For Delivery",
  ).length;
  const delivered = orders.filter(
    (order) => order.status === "Delivered",
  ).length;

  const card = [
    {
      title: "Total Orders",
      value: total,
    },
    {
      title: "Preparing",
      value: preparing,
    },
    {
      title: "Out For Delivery",
      value: delivery,
    },
    {
      title: "Delivered",
      value: delivered,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {card.map((card) => (
        <div key={card.title} className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-slate-500 text-sm">{card.title}</h3>
          <p className="text-3xl font-bold mt-2 text-slate-800">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
