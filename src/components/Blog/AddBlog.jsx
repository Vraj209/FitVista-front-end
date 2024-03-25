import React, { useEffect, useState } from "react";
import { Sidebar } from "../index";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
function AddBlog()
{
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Blog", blog);
    

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/blog/addBlog",
        blog,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from AddBlog", response.data);
      alert("Blog added successfully");
    } catch (error) {
      console.log("Error in AddBlog while api requesting", error);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBlog({...blog,image:e.target.files[0]});
      // console.log("image",e.target.files[0])
    }
    else
    {
      console.log("No image selected")
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              value={blog.category}
              onChange={ (e) => setBlog({ ...blog, category: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a category</option>
              <option value="workouts">Workouts</option>
              <option value="nutrition">Nutrition</option>
              <option value="wellness">Wellness</option>
              <option value="equipment">Equipment</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 "
            >
              Blog Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help  wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
              }}
              onEditorChange={(newdescription) =>
              setBlog({ ...blog, description:newdescription  })
              }
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
