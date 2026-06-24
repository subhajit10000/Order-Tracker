import React, { useEffect, useRef } from "react";

const SearchBar = ({ search, setSearch }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <input
      type="text"
      ref={searchRef}
      placeholder="Search by customer, restaurent or order id..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
    />
  );
};

export default SearchBar;
