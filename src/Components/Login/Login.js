import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/undraw_helpful_sign_re_8ms5.svg";
import { AuthContext } from "../../Context/Auth.Context";
import useTitle from "../../Hooks/useTitle";
import Loader from "../Loder/Loader";
const Login = () => {
  useTitle("Login");
  const { logIn, googleSignIn, githubSignIn, setUser, setLoading, loading } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    logIn(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        toast.success("Login success");
        navigate("/courses");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        toast.success("Login successful");
        navigate("/courses");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      });
  };
  const handleGithubSignIn = () => {
    setLoading(true);
    githubSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);

        toast.success("Login successful");
        navigate("/courses");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-full py-12 px-0 min-h[80vh] flex justify-center items-center space-x-4 bg-slate-500 dark:bg-slate-800">
      <div className="animate-slide-down hidden md:flex ">
        <img src={loginImg} alt="" className="w-auto h-[180px]" />
      </div>
      <div className="w-[35rem] shadow-lg p-9 rounded animate-slide-up">
        <h2 className="text-slate-900 dark:text-slate-200 font-bold text-3xl text-center">
          Login
        </h2>
        <form
          className="mt-5 w-full flex flex-col gap-2"
          onSubmit={handleSignIn}
        >
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
            Login
          </button>
        </form>
        <div>
          <Link to="/reset" className="text-slate-200">
            Reset Password
          </Link>
          <div className="flex justify-between items-center">
            <span className="w-[45%] h-[1px] bg-slate-300"></span>
            <span className="text-slate-600">OR</span>
            <span className="w-[45%] h-[1px] bg-slate-300"></span>
          </div>
          <div className="flex justify-between items-center space-x-4 py-4">
            <button
              className="rounded bg-slate-600 hover:bg-slate-700 transition-colors text-white border-none focus:outline-none w-full px-3 py-2 focus:ring-2 flex items-center justify-center gap-2"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="text-xl"> </FcGoogle> Login With Google
            </button>
            <button
              className="rounded bg-slate-600 hover:bg-slate-700 transition-colors text-white border-none focus:outline-none w-full px-3 py-2 focus:ring-2 flex items-center justify-center gap-2"
              onClick={handleGithubSignIn}
            >
              <AiFillGithub className="text-xl"></AiFillGithub> Login With
              Github
            </button>
          </div>
          <p>
            <span className="text-gray-200 "> Don't have an account?</span>{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
