import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Auth.Context";
import useTitle from "../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const { user, verifyEmail, deleteProfile } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-900 min-h-screen">
      <img
        src={user?.photoURL}
        alt={user?.displayName}
        className="rounded-full border-4 border-white w-[100px] h-[100px] relative top-[40px] hover:scale-110 transition-all duration-300"
      />
      <div className="w-[350px] rounded-md py-2  h-[200px] bg-white dark:bg-black   flex flex-col justify-end items-center">
        <h2 className="font-bold text-3xl text-gray-900 dark:text-gray-100">
          {user?.displayName}
        </h2>
        <p className="text-sm text-gray-400 font-medium">{user?.email}</p>
        <div>
          {user?.emailVerified ? (
            <span className="text-green-500 font-semibold">Verified</span>
          ) : (
            <div className="flex flex-col justify-center items-center ">
              <span className="text-red-600 font-semibold">unverified</span>
              <button
                onClick={verifyEmail}
                className="bg-blue-500 text-sm hover:bg-blue-600 transition-all dark:bg-sky-900 dark:hover:bg-sky-900  px-3 rounded text-white mb-2"
              >
                Send Verification Mail
              </button>
            </div>
          )}
        </div>
        <button className="bg-blue-500 text-sm hover:bg-blue-600 transition-all dark:bg-sky-900 dark:hover:bg-sky-900  px-3 rounded text-white ">
          <Link to="/update-profile">Update Profile</Link>
        </button>
        <button
          className="bg-red-500 text-sm hover:bg-red-600 transition-all dark:bg-sky-900 dark:hover:bg-sky-900  px-3 rounded text-white mt-2"
          onClick={deleteProfile}
          title="For Delete Profile User Must be Log in recently"
        >
          Delete Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
