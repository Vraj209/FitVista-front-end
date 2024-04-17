import React, { useState, useEffect } from "react";
import axios from "axios";
function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/blog/getBlogs');
          setBlogs(response.data.blogs); 
          
        } catch (error) {
            console.error('Error fetching blogs', error);
        }
    }

    fetchBlogs();
}, []);

  return (
    <div>
      {/* Hero Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="Blog Hero"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl font-bold">Our Blogs</h1>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl">{blog.title}</h3>
                <p className="text-gray-600">Category: {blog.category}</p>
                <a href={`/blog/${blog._id}`} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
