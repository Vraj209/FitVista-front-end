import React from "react";
import { Sidebar } from "../index";
import { Link } from "react-router-dom";
function AddBlog() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-blue-500">
          <p className="text-5xl text-white">Add Blogs</p>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
