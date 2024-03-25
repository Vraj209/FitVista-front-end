import React from "react";

function Home() {
  return (
    <div>
      {/* navbar */}
      <div className="flex justify-between items-center p-5 bg-white text-gray-800">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex space-x-5">
        <a href="/blogs" className="text-lg">
            Blogs
          </a>
          <a href="/ecommerce" className="text-lg">
            Ecommerce
          </a>
          <a href="/dashboard" className="text-lg">
            Dashboard
          </a>
          <a href="/signin" className="text-lg">
            Signin
          </a>
          <a href="/signup" className="text-lg">
            Signup
          </a>
        </div>
      </div>
      {/* hero section */}
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to our website</h1>
          <p className="mt-5">This is a simple hero section</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
