import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "../index";
import { Link } from "react-router-dom";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get("/api/v1/blog/getBlogs");
        setBlogs(response.data.blogs);
        fetchBlogs();
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">All Blog</h1>
        <div className="mt-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="mb-4 p-4 bg-white shadow-sm rounded-md"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-400">{blog.category}</p>
              {/* <p className="text-gray-600">{blog.description}</p> */}
              {/* Link to the edit page, assuming you have a route set up like '/edit-blog/:id' */}
              <Link
                to={`/edit-blog/${blog._id}`}
                className="inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllBlogs;
