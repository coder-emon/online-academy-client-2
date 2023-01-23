import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Checkout from "../Components/Checkout/Checkout";
import Contact from "../Components/Contact/Contact";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Dashboard from "../Components/Dashboard/Dashboard";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Reset from "../Components/Reset/Reset";
import UpdateProfile from "../Components/UpadateProfile/UpdateProfile";
import Main from "../Main/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://online-academy-server.vercel.app/courses"),
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://online-academy-server.vercel.app/courses"),
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://online-academy-server.vercel.app/category/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://online-academy-server.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://online-academy-server.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        loader: () => fetch("https://online-academy-server.vercel.app/blogs"),
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        loader: ({ params }) =>
          fetch(`https://online-academy-server.vercel.app/blog/${params.id}`),
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reset",
        element: <Reset></Reset>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
