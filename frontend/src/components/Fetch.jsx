import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Fetch = () => {
  const [detail, setDetail] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/api/getalluser");
    console.log(response.data);
    setDetail(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const Del = await axios.delete(`http://localhost:3001/api/delete/${id}`);
    setDetail(detail.filter((D) => D._id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((item, index) => (
            <tr key={item._id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.role}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <Link to="/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            Create User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fetch;
