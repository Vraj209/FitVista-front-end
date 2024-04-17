import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ViewBlog() {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const response = await axios.get(`/api/v1/blog/getBlog/${id}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog data", error);
      }
    }

    fetchBlogData();
  }, [id]);

  if (!blog) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-left mb-6">{blog.title}</h1>
        <div className="mb-6 text-center">
          <img src={blog.image} alt={blog.title} className="mx-auto rounded-lg shadow-lg max-h-96 w-auto" />
        </div>
        <p className="text-gray-600 text-left mb-4">Category: {blog.category}</p>
        <div className="prose lg:prose-lg mx-auto text-2xl" dangerouslySetInnerHTML={{ __html: blog.description }}>
        </div>
      </article>
    </div>
  );
}

export default ViewBlog;
