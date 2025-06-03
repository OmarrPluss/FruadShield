// src/components/AccountData.jsx
import React from 'react';

const AccountData = ({ selectedUser }) => {
  return (
    <section className="col-span-2 bg-gray-800 p-5 rounded">
      <h3 className="text-lg mb-4">Account Data</h3>
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-xs text-gray-400">First Name</label>
          <p>{selectedUser.name}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Gender</label>
          <p>{selectedUser.gender}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Date of Birth</label>
          <p>{selectedUser.dob}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Email</label>
          <p>{selectedUser.email}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Phone</label>
          <p>{selectedUser.phone}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Account Balance</label>
          <p>{selectedUser.accountBalance}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Credit Card</label>
          <p>{selectedUser.creditCard}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Login ID</label>
          <p>{selectedUser.loginId}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Last Login</label>
          <p>{selectedUser.lastLogin}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Account Status</label>
          <p className={selectedUser.status === 'Active' ? 'text-green-500' : 'text-red-500'}>{selectedUser.status}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">Job Title</label>
          <p>{selectedUser.jobTitle}</p>
        </div>
        <div>
          <label className="text-xs text-gray-400">City</label>
          <p>{selectedUser.city}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Reset Password</button>
        <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Delete</button>
      </div>
    </section>
  );
};

export default AccountData;