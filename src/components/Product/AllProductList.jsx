import React, { useEffect, useState } from "react";
import { Sidebar } from "../index";
import { Link } from "react-router-dom";
import axios from "axios";
function AllProductList() {
  // Replace this with your actual data
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        axios
          .get("http://localhost:3000/api/v1/product/getProducts")
          .then((response) => {
            const { products } = response.data;
            setProducts(products);
          })
          .catch((error) => {
            console.log("Error in getting all products", error);
          });
      } catch (error) {
        console.log("Error in getting all products", error);
      }
    })();
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-green-500">
            <p className="text-5xl text-white">All Products</p>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(products) &&
                products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  font-medium flex justify-center">
                      <Link
                        to={`/editProduct/${product._id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllProductList;
