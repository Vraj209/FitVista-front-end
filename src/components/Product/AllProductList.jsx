import React from "react";
import { Sidebar } from "../index";
import { Link } from "react-router-dom";
function AllProductList() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-green-500">
            <p className="text-5xl text-white">All Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProductList;
