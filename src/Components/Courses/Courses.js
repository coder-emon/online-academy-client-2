import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import CourseCard from "../CourseCard/CourseCard";
import Loader from "../Loder/Loader";

const Courses = () => {
  const location = useLocation();

  useTitle(location.pathname);
  const courses = useLoaderData();
  const [categories, setCategories] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://online-academy-server.vercel.app/categories"
      );
      const json = await data.json();
      setCategories(json);
    };
    fetchData().catch(console.error);
  }, []);

  if (!courses) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="bg-slate-100 dark:bg-slate-700 w-full md:w-[75%] px-3">
          <div className="container mx-auto">
            <h2 className="text-3xl p-2 font-bold text-slate-900 dark:text-slate-200 border-b-2 border-slate-800 dark:border-slate-300 mb-5">
              Our courses
            </h2>
            <div className="flex flex-wrap  ">
              {courses?.map((course) => (
                <CourseCard course={course} key={course.id}></CourseCard>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[25%] flex justify-center items-start border border-l-2 border-b-0  border-r-0 border-gray-400 py-9">
          <div>
            <h2 className="text-center border-b-2 text-3xl dark:text-slate-200 font-bold text-gray-300 border-gray-300 mb-5 w-full">
              All Categories
            </h2>
            {categories?.map((c) => (
              <p key={c.id}>
                <Link to={`/category/${c.id}`} className="text-blue-600">
                  {c.name}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
