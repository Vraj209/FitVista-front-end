import React from "react";
import { Sidebar } from "../index";

function AllBlogs() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-fuchsia-500">
            <p className="text-5xl text-white">All Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBlogs;
