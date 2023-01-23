import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot_password_re_hxwm.svg";
import { AuthContext } from "../../Context/Auth.Context";
import useTitle from "../../Hooks/useTitle";

const Reset = () => {
  useTitle("Reset");
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email).then(() => {
      toast.success("Reset Password Mail Sent to your Inbox");
    });
  };
  return (
    <div className="w-full py-12 px-0 min-h[80vh] flex justify-center items-center space-x-4 bg-slate-500 dark:bg-slate-800">
      <div className="animate-slide-down hidden md:flex ">
        <img src={resetImg} alt="" className="w-auto h-[180px]" />
      </div>
      <div className="w-[35rem] shadow-lg p-9 rounded animate-slide-up">
        <h2 className="text-slate-900 dark:text-slate-200 font-bold text-3xl text-center">
          Login
        </h2>
        <form
          className="mt-5 w-full flex flex-col gap-2"
          onSubmit={handleReset}
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

          <button
            className="rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
            type="submit"
          >
            Reset Password
          </button>
        </form>
        <div>
          <div className="flex justify-between items-center">
            <span className="w-[45%] h-[1px] bg-slate-300"></span>
            <span className="text-slate-600">OR</span>
            <span className="w-[45%] h-[1px] bg-slate-300"></span>
          </div>
          <Link to="/login" className="text-slate-200">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reset;
