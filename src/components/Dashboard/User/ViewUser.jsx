import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../Sidebar/Sidebar";
import { AuthContext } from "../../../contexts/AuthProvider";

function ViewUser()
{
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const [user, setUser] = useState({});
  const [trainers, setTrainers] = useState([]); // New state for storing trainers
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
    fetchTrainers(); // Fetch trainers when the component mounts
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `/api/v1/users/getUser/${id}`,  {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
          },
        }
      );
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // Function to fetch trainers from the backend
  const fetchTrainers = async () => {
    try {
      const response = await axios.get(
        `/api/v1/users/totalUser`,  {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
          },
        }
      );
      let users = response.data.users;
      setTrainers(
        users.filter((user) => {
          return user.role == "trainer" && user.status == "active";
        })
      );
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const updateTrainer = async (newTrainerId) => {
    try {
      await axios.put(
        `/api/v1/users/trainerAssign/${id}`,
        {
          trainer: newTrainerId,
        },  {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`, // Assuming you use Bearer token
          },
        }
      );
      fetchUser();
    } catch (error) {
      console.error("Error updating user trainer:", error);
    }
  };
  const handleTrainerChange = (e) => {
    const newTrainerId = e.target.value;
    setUser({ ...user, trainer: newTrainerId });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTrainer(user.trainer);
    alert("Trainer updated successfully");
  };
  return (
    <>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div className="p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-pink-100">
              <p className="text-5xl font-bold text-gray-800">
                User Data : {user.firstName}
              </p>
            </div>
            <div className="py-3 mb-2">
              <p className="text-3xl font-semibold text-gray-800">
                User Details
              </p>
            </div>
            <form onSubmit={handleSubmit} className="responsive-form">
              {/* Repeat this structure for each user field you wish to display */}
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
                  value={user.firstName || ""}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
                  readOnly
                />
              </div>

              {/* Add additional fields below */}
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
                  value={user.lastName || ""}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
                  readOnly
                />
              </div>

              {/* Example for Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email || ""}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={user.role || ""}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
                  readOnly
                />
              </div>

              {/* Trainer dropdown */}
              <div className="mb-4">
                <label
                  htmlFor="trainer"
                  className="block text-sm font-medium text-gray-700"
                >
                  Trainer
                </label>
                <select
                  name="trainer"
                  id="trainer"
                  value={user.trainer || ""}
                  className="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm"
                  onChange={handleTrainerChange}
                >
                  {trainers.map((trainer) => (
                    <option key={trainer._id} value={trainer._id}>
                      {trainer.firstName} 
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 p-2 bg-blue-500 text-white rounded"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
