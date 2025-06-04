// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <aside className="w-52 bg-gray-950 p-5">
      <h3 className="mb-4 text-lg">Users</h3>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className={`p-2 rounded cursor-pointer ${
              user === selectedUser.name ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
            onClick={() => setSelectedUser({ ...selectedUser, name: user })}
          >
            {user}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;