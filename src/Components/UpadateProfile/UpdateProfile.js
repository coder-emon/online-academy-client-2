import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import registerImg from "../../assets/undraw_access_account_re_8spm (1).svg";
import { AuthContext } from "../../Context/Auth.Context";
import useTitle from "../../Hooks/useTitle";

const UpdateProfile = () => {
  useTitle("Update Profile");
  const { updateUser, updatePass, updateMail, verifyEmail, setLoading } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
  });
  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handlePhotoUrlChange = (e) => {
    setUserInfo({ ...userInfo, photoUrl: e.target.value });
  };
  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    if (userInfo.password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    updateUser(userInfo.name, userInfo.photoUrl)
      .then(() => {
        updateMail(userInfo.email)
          .then(() => {
            // toast.success("Email updated successfully");
            verifyEmail().then(() => {
              toast.success("Verification emaill sent to your new mail");
            });
            updatePass(userInfo.password)
              .then(() => {
                // toast.success("Passwords updated successfully");
              })
              .catch((err) => {
                toast.error(err.message);
              });
          })
          .catch((err) => {
            toast.error(err.message);
          });

        toast.success("user updated successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
        setLoading(false);
      });
    form.reset();
  };
  return (
    <div className="w-full py-12 px-0 min-h[80vh] flex justify-center items-center space-x-4 bg-slate-500 dark:bg-slate-800">
      <div className="w-[35rem] shadow-lg p-9 rounded animate-slide-up">
        <h2 className="text-slate-900 dark:text-slate-200 font-bold text-3xl text-center">
          Update Profile
        </h2>
        <form
          className="mt-5 w-full flex flex-col gap-2"
          onSubmit={handleSignUp}
        >
          <div className="w-full inline-grid">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="text"
              placeholder="Photo Url"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              onChange={handlePhotoUrlChange}
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="email"
              placeholder="Email"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="password"
              placeholder="Password"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button
            className="rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
            type="submit"
          >
            Update Profile
          </button>
          <p>
            <span className="text-gray-200 ">Go to</span>{" "}
            <Link to="/dashboard" className="text-blue-600">
              Dashboard
            </Link>
          </p>
        </form>
      </div>
      <div className="animate-slide-down hidden md:flex ">
        <img src={registerImg} alt="" className="w-auto h-[180px]" />
      </div>
    </div>
  );
};

export default UpdateProfile;
