import { getUsers } from "@/actions/user";
import React from "react";

const Users = async () => {
  const users = await getUsers();
  return (
    <div className="text-center pt-32 px-5">
      <h1 className="text-3xl font-bold text-gray-800">
        All Users <span className="text-gray-500">({users.length})</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-5 rounded-lg shadow-md">
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
