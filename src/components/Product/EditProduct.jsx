import React, { useContext, useEffect, useState } from "react";
import { Sidebar } from "../index";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/product/getProduct/${id}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.log("Error in getting product", error);
      }
    };

    fetchProduct();
  }, [id]);

  // update handler
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/product/updateProduct/${id}`,
        product,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response from updating product", response.data);
      alert("Product updated successfully");
    } catch (error) {
      console.log("Error in updating product", error);
    }
  };

  // delete handler
  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/product/deleteProduct/${id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response from deleting product", response.data);
      alert("Product deleted successfully");
      navigate("/allProduct");
    } catch (error) {
      console.log("Error in deleting product", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="flex-grow p-3 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-green-500">
          <p className="text-5xl text-white">Edit Product - {product.name}</p>
        </div>

        <form className="grid grid-cols-2 gap-6" onSubmit={updateHandler}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label>Category</label>
            <select
              name="category"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="supliments">Supliments</option>
              <option value="equipment">Equipment</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="shortDescription">Short Description</label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              value={product.shortDescription}
              onChange={(e) =>
                setProduct({ ...product, shortDescription: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex ">
            <button
              type="submit"
              className="w-1/6 px-4 py-2 text-white bg-green-500 rounded-md"
            >
              Update
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="w-1/6 px-4 py-2 ml-2 text-white bg-red-500 rounded-md"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
