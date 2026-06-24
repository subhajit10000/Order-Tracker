import React from "react";

import { ORDER_FLOW } from "../data/mockdata.js";

const OrderTimeline = ({ status }) => {
  const currentIndex = ORDER_FLOW.indexOf(status);
  console.log(ORDER_FLOW);
  return (
    <div className="mt-4">
      <div className="flex items-center">
        {ORDER_FLOW.map((step, index) => (
          <div key={step} className="flex items-center flex-1">
            <div
              className={`h-4 w-4 rounded-full ${index <= currentIndex ? "bg-green-500" : "bg-slate-200"}`}
            />

            {index !== ORDER_FLOW.length - 1 && (
              <div
                className={`flex-1 h-1 ${index < currentIndex ? "bg-green-500" : "bg-slate-200"}`}
              />
            )}
          </div>
        ))}
      </div>

      <p className="mt-2 text-sm text-slate-600 "> {status}</p>
    </div>
  );
};

export default OrderTimeline;
