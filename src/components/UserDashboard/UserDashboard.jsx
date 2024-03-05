import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
function UserDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-pink-100">
            <p className="text-5xl font-bold text-gray-800">User Profile</p>
          </div>

          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">User Profile</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-purple-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">0</p>
              <p className="text-xl text-gray-600">Actice session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
