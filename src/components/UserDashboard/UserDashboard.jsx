import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";

function UserDashboard() {
  const { auth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const [user, setUser] = useState({});
  const [Session, setSession] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [userData.firstName]);

  useEffect(() => {
    fetchRoomCode();
  }, []); // Ensure this effect does not run repeatedly unless explicitly needed

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/users/getUser/${userData.trainer}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchRoomCode = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/trainingsession/sessions`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const sessions = response.data.sessions;
      const filteredSessions = sessions.filter(session => session.username === userData.firstName);
      setSession(filteredSessions);
    } catch (error) {
      console.error("Error fetching room codes:", error);
    }
  };

  const roomCode = Session.length > 0 ? Session[0].roomcode : "No Room Code Available";

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
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {user.firstName || "N/A"}
              </p>
              <p className="text-xl text-gray-600">Trainer Name</p>
            </div>
            <div className="flex flex-col items-center justify-center h-24 rounded-lg bg-purple-200 shadow">
              <p className="text-3xl font-semibold text-gray-800 py-2">
                {roomCode}
              </p>
              <p className="text-xl text-gray-600">Room Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
