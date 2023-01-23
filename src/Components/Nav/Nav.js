import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../../Context/Auth.Context";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const [displayNav, setDisplayNav] = useState(false);
  const [tooltip, setTolltip] = useState(false);
  // Theme Switcher start
  const [isDark, setIsDark] = useState();

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    setIsDark(true);
    document.documentElement.classList.add("dark");
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");

    setIsDark(false);
    document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    const isTheme = localStorage.theme;
    if (isTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);
  //Theme Switcher end
  return (
    <div className="bg-indigo-600 dark:shadow-lg dark:backdrop-blur-md dark:bg-gray-800/90 relative px-6 py-2">
      <nav className="flex justify-between items-center relative  ">
        <NavLink to="/" className="bg-white  rounded-lg active ">
          <img src={logo} alt="" className="w-[80px]" />
        </NavLink>
        <ul className="md:flex hidden text-white md:space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="faq">Faq</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {user?.uid ? (
            <img
              src={user.photoURL}
              alt={user.diplayName}
              className="h-8 w-8 rounded-full"
              onMouseEnter={() => {
                setTolltip(true);
              }}
              onMouseLeave={() => {
                setTolltip(false);
              }}
            />
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
          <button className="text-2xl ">
            {isDark ? (
              <FaSun onClick={setLight}></FaSun>
            ) : (
              <FaMoon onClick={setDark}></FaMoon>
            )}
          </button>
        </ul>
        <div className="flex md:hidden justify-between items-center gap-2 text-white text-2xl">
          <button>
            {isDark ? (
              <FaSun onClick={setLight}></FaSun>
            ) : (
              <FaMoon onClick={setDark}></FaMoon>
            )}
          </button>
          <button
            onClick={() => {
              setDisplayNav(!displayNav);
            }}
          >
            {displayNav ? <ImCross></ImCross> : <FaBars></FaBars>}
          </button>
        </div>
        {displayNav ? (
          <ul className=" md:hidden flex flex-col top-14 justify-center items-center py-3 gap-2 bg-slate-500 absolute w-full  right-0  text-white md:space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="faq">Faq</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {user?.uid ? (
              <>
                <img
                  src={user.img}
                  alt={user.diplayName}
                  className="h-8 w-8 rounded-full"
                />
                <button
                  className="bg-blue-500 dark:bg-sky-800 dark:hover:bg-sky-900 hover:bg-blue-600 py-2 px-3 rounded"
                  onClick={logOut}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        ) : null}
      </nav>
      {tooltip && (
        <div
          className="bg-slate-400 w-auto h-[120px] p-5 flex flex-col justify-center items-center space-y-3 rounded-md absolute right-12 top-[55px]"
          onMouseEnter={() => {
            setTolltip(true);
          }}
          onMouseLeave={() => {
            setTolltip(false);
          }}
        >
          <Link
            to="/dashboard"
            className="bg-blue-500 hover:bg-blue-600 dark:bg-sky-900 dark:hover:bg-sky-900 py-2 px-3 rounded text-white w-full text-center"
          >
            {user?.displayName}
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-600 dark:bg-sky-900 dark:hover:bg-sky-900 py-2 px-3 rounded text-white w-full"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
