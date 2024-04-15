import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar"; // Make sure the path is correct based on your project structure
import { AuthContext } from "../../contexts/AuthProvider";
function TrainerDashboard() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  console.log("userData", userData);
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg shadow-md bg-gray-50 ">
          <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-blue-100">
            <p className="text-5xl font-bold text-gray-800">
              Trainer Dashboard
            </p>
          </div>

          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">
              Welcome, {userData.firstName}!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {/* Upload Video Card */}
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-blue-200 shadow">
              <Link
                to="/upload-video"
                className="text-2xl font-semibold text-gray-800 py-2 hover:text-gray-600"
              >
                Upload Video
              </Link>
            </div>

            {/* Total Trainee Card */}
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-green-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">{}</p>
              <p className="text-xl text-gray-600">Assign Trainees</p>
            </div>
          </div>

          {/* Trainer Info */}
          <div className="bg-white  p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={userData.firstName}
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={userData.lastName}
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerDashboard;
