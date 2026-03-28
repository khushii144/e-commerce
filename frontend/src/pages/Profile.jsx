import React from "react";
import useUserStore from "../../store/userStore";

const Profile = () => {
  const { user } = useUserStore();

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">

        {/* Profile Header */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={user?.avatar || "https://via.placeholder.com/100"}
            alt="profile"
            className="w-24 h-24 rounded-full border"
          />

          <h2 className="text-xl font-semibold">{user?.name || "User Name"}</h2>
          <p className="text-gray-600 text-sm">{user?.email || "email@gmail.com"}</p>
        </div>

        <hr className="my-4" />

        {/* Details Section */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Phone:</span>
            <span className="font-medium">{user?.phone || "Not added"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Role:</span>
            <span className="font-medium">{user?.role || "User"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Joined:</span>
            <span className="font-medium">{user?.createdAt?.slice(0, 10) || "--"}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;