import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import registerImg from "../../assets/undraw_access_account_re_8spm (1).svg";
import { AuthContext } from "../../Context/Auth.Context";
import useTitle from "../../Hooks/useTitle";
const Register = () => {
  useTitle("Register");
  const { signUp, updateUser, verifyEmail, setUser, setLoading } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
    confirmPass: "",
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
  const handleConfirmPassChange = (e) => {
    setUserInfo({ ...userInfo, confirmPass: e.target.value });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    if (userInfo.password !== userInfo.confirmPass) {
      toast.error("Passwords don't match");
      return;
    } else if (userInfo.password.length < 6) {
      toast.error("Password must be at least 6 characters");
    }
    signUp(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        updateUser(userInfo.name, userInfo.photoUrl)
          .then(() => {
            setUser(user);
            console.log(user);
            toast.success("user created successfully");
            verifyEmail().then(() => {
              toast.success(
                "verfication mail sent to your inbox or spam folder"
              );
              setLoading(false);
            });
          })
          .catch(() => {});
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
      });
    form.reset();
  };
  return (
    <div className="w-full py-12 px-0 min-h[80vh] flex justify-center items-center space-x-4 bg-slate-500 dark:bg-slate-800">
      <div className="w-[35rem] shadow-lg p-9 rounded animate-slide-up">
        <h2 className="text-slate-900 dark:text-slate-200 font-bold text-3xl text-center">
          Register
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
          <div className="w-full inline-grid">
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              onChange={handleConfirmPassChange}
            />
          </div>
          <button
            className="rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
            type="submit"
          >
            Register
          </button>
          <p>
            <span className="text-gray-200 ">Already have an account?</span>{" "}
            <Link to="/login" className="text-blue-600">
              Login
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

export default Register;
