import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../../contexts/AuthProvider";

function Profile() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  // console.log("user", userData);
  // console.log("accessToken", accessToken);
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>
          <h2 className="text-2xl">Hii, {userData.firstName}</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
