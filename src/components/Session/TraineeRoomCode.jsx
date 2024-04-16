import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

function TraineeRoomCode() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const [Session, setSession] = useState([]);
  useEffect(() => {
    const fetchSession = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/trainingsession/sessions`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      let session = response.data.sessions;
      console.log(session);
      setSession(
        session.filter((session) => {
          return session.trainername === userData.firstName;
        })
      );
    };
    fetchSession();
  }, [userData]);
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">
            {userData.firstName} Sessions Codes
          </h1>
        </div>

        <table className="w-full mt-4 border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Username</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Room Code</th>
            </tr>
          </thead>
          <tbody>
            {Session.map((session, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-2 px-4">{session.username}</td>
                <td className="py-2 px-4">{session.date}</td>
                <td className="py-2 px-4">{session.time}</td>
                <td className="py-2 px-4">{session.roomcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TraineeRoomCode;
