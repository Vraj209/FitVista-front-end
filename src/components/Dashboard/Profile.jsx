import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function Profile() {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
