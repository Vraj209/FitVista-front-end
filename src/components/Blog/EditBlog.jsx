import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigation } from "react-router-dom";
import { Sidebar } from "../index";
import { Editor } from "@tinymce/tinymce-react";

function EditBlog() {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/blog/getBlog/${id}`
        );
        const blog = response.data.blog;
        setTitle(blog.title);
        setCategory(blog.category);
        setDescription(blog.description);
        // Note: Handling images might require additional logic
      } catch (error) {
        console.error("Error fetching blog data", error);
      }
    }

    fetchBlogData();
  }, [id]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      await axios.put(
        `http://localhost:3000/api/v1/blog/updateBlog/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Blog updated successfully");
      navigation.goBack(); // Navigate to the blog list or home page after successful update
    } catch (error) {
      console.error("Error updating blog", error);
      alert("Failed to update the blog");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(
          `http://localhost:3000/api/v1/blog/deleteBlog/${id}`
        );
        alert("Blog deleted successfully");
        navigation.goBack(); // Navigate to the blog list or home page after successful update
        // Navigate away after deletion
      } catch (error) {
        console.error("Error deleting blog", error);
        alert("Failed to delete the blog");
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-64 p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Edit Blog</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Form fields here, similar to AddBlog.js */}
          {/* Example: Title Input */}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              className="block text-sm font-medium text-gray-700"
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
              value={description}
              onEditorChange={(newDescription) =>
                setDescription(newDescription)
              }
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              }}
            />
          </div>
          {/* Include other fields and Editor component for description similar to AddBlog */}
          <div className="flex gap-2">
          <button
            type="submit"
            className="  w-1/6 justify-center  py-2  text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update Blog
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className=" w-1/6 justify-center  py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete Blog
          </button>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
