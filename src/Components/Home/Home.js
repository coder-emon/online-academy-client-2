import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import CourseCard from "../CourseCard/CourseCard";
import Hero from "../Hero/Hero";
const Home = () => {
  useTitle("Home");
  const courses = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <div className="bg-slate-100 dark:bg-slate-700">
        <div className="container mx-auto">
          <h2 className="text-3xl p-2 font-bold text-slate-900 dark:text-slate-200 border-b-2 border-slate-800 dark:border-slate-300 mb-5">
            {" "}
            Explore our courses
          </h2>
          <div className="flex flex-wrap  ">
            {courses?.map((course) => (
              <CourseCard course={course} key={course.id}></CourseCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
