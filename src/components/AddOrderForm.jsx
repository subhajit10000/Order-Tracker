import React, { useRef, useState } from "react";

const AddOrderForm = ({ setOrders }) => {
  const customerRef = useRef();

  const [formData, setFormData] = useState({
    customer: "",
    restaurant: "",
    amount: "",
    eta: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateOrderId = () => {
    return `ORD${Date.now().toString().slice(-6)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { customer, restaurant, amount, eta } = formData;

    if (!customer || !restaurant || !amount || !eta) {
      alert("Please fill all fields");
      return;
    }

    const newOrder = {
      id: generateOrderId(),
      customer,
      restaurant,
      amount: Number(amount),
      eta: Number(eta),
      status: "Received",
    };

    // Order Collection update
    console.log("from input component", newOrder);
    setOrders((prev) => [newOrder, ...prev]);

    setFormData({
      customer: "",
      restaurant: "",
      amount: "",
      eta: "",
    });
    customerRef.current.focus();
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Add New Order</h2>
        <p className="text-slate-500 mt-1">Create and track customer orders</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <input
          ref={customerRef}
          type="text"
          name="customer"
          placeholder="Customer Name"
          value={formData.customer}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
        />

        <input
          type="text"
          name="restaurant"
          placeholder="Restaurant Name"
          value={formData.restaurant}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
        />

        <input
          type="number"
          name="amount"
          placeholder="Order Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
        />

        <input
          type="number"
          name="eta"
          placeholder="ETA (mins)"
          value={formData.eta}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
        />

        <button
          type="submit"
          className="
          px-6 py-3
          bg-gradient-to-r
          from-orange-500
          to-orange-600
          hover:from-orange-600
          hover:to-orange-700
          text-white
          font-semibold
          rounded-xl
          shadow-md
          hover:shadow-lg
          transition-all
          duration-300
          hover:-translate-y-0.5
        "
        >
          + Place Order
        </button>
      </form>
    </div>
  );
};

export default AddOrderForm;
