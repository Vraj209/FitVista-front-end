import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

function AssignTrainee() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const [User, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/users/totalUser`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      let users = response.data.users;
      console.log(users);
      setUser(
        users.filter((user) => {
          return user.trainer === userData._id && user.role == "trainee";
        })
      );
      console.log("Assign User", User);
    };
    fetchUser();
  }, [userData]);
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Assign Trainee</h1>
        </div>

        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">First Name</th>
              <th className="py-2 px-4 text-left">Last Name</th>
              <th className="py-2 px-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {User.map((trainee, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-2 px-4">{trainee.firstName}</td>
                <td className="py-2 px-4">{trainee.lastName}</td>
                <td className="py-2 px-4">{trainee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssignTrainee;
