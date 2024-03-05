import React, { useEffect, useState } from "react";
import { Sidebar } from "../index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    shortDescription: "",
    description: "",
    image: null,
  });
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigation = useNavigate();
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/product/addProduct",
        formData
      );
      console.log("Response from adding product", response.data);
      alert("Product added successfully");
      setLoading(false);
    } catch (error) {
      console.log("Error in adding product", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      formData.name.length > 0 &&
      formData.price.length > 0 &&
      formData.category.length > 0 &&
      formData.shortDescription.length > 0 &&
      formData.description.length > 0 &&
      formData.image
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formData]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-3 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-yellow-500">
          <p className="text-5xl text-white">
            {loading ? "Processing" : "Add Product"}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Image
              </label>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a category</option>
                <option value="supliments">Supliments</option>
                <option value="equipment">Equipment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {disable ? "Please add all details" : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
