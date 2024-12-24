import React from 'react';
import { DiAptana } from "react-icons/di";
import { ImCross } from "react-icons/im";


const UserData = () => {
  const users = [
    {
      id: 1,
      name: ' Holz',
      dateCreated: '04/10/2013',
      role: 'Admin',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Paula Wilson',
      dateCreated: '05/08/2014',
      role: 'Publisher',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Antonio Moreno',
      dateCreated: '11/05/2015',
      role: 'Publisher',
      status: 'Suspended',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Mary Saveley',
      dateCreated: '06/09/2016',
      role: 'Reviewer',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 5,
      name: 'Martin Sommer',
      dateCreated: '12/08/2017',
      role: 'Moderator',
      status: 'Inactive',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Date Created</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                {user.name}
              </td>
              <td className="px-4 py-2">{user.dateCreated}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm font-medium ${
                    user.status === 'Active'
                      ? 'text-green-600 bg-green-100'
                      : user.status === 'Suspended'
                      ? 'text-red-600 bg-red-100'
                      : 'text-yellow-600 bg-yellow-100'
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-2 flex justify-center gap-2">
                <button className="text-blue-500 hover:text-blue-600">
                <DiAptana />
                </button>
                <button className="text-red-500 hover:text-red-600">
                <ImCross />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;