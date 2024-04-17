import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { AuthContext } from "../../../contexts/AuthProvider";

function TrainerData()
{
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/users/totalUser`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
          },
        }
      );
      let users = response.data.users;
      setUsers(
        users.filter((user) => {
          return user.role == "trainer" && user.status == "active";
        })
      );
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-pink-100">
            <p className="text-5xl font-bold text-gray-800">Trainer Data</p>
          </div>

          <div className="py-3 mb-2">
            <p className="text-3xl font-semibold text-gray-800">All Trainer</p>
          </div>
          <div className="responsive-table">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    No of Trainee
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.firstName}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.role}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      1
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.status == "active" ? "active" : "inactive"}
                    </td>
                    <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <button
                        className={` rounded ${
                          user.status == "active"
                            ? "bg-red-500"
                            : "bg-green-500"
                        } text-white focus:outline-none focus:shadow-outline`}
                        onClick={() => toggleUserStatus(user.id, user.status)}
                      >
                        {user.status == "active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerData;
