import React, { createRef, useEffect, useState } from "react";
import { FaRegComment, FaRegEye } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import StartRating from "../StarRating/StartRating";
import ReactToPdf from "react-to-pdf";
import useTitle from "../../Hooks/useTitle";
const CourseDetails = () => {
  useTitle("Course Details");
  const {
    id,
    courseTitle,
    author,
    imageURL,
    category,
    rating,
    bestSellarBadge,
    numberOfReview,
    regularPrice,
    discountPrice,
  } = useLoaderData();
  const ref = createRef();
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
  return (
    <div className="flex justify-between items-start bg-slate-100 dark:bg-slate-700">
      <div className="w-full md:w-[25%]">
        <div ref={ref}>
          <h2 className="text-center text-5xl font-bold border-b-2 mb-1 mt-3 border-slate-700 dark:border-slate-200 text-slate-800 dark:text-slate-200">
            Course Info
          </h2>
          <span className="bg-grenn-100 text-green-800 text-sm font-medium mr02 px-3 py-1 rounded dark:bg-green-200 dark:text-grenn-900">
            {bestSellarBadge ? bestSellarBadge : ""}
          </span>
          <div className="px-5 py-3">
            <div className="flex justify-between items-center ">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Author:
              </h2>
              <p className="text-sm font-medium text-gray-900 dark:text-slate-200 mb-3">
                {author}
              </p>
            </div>
            <div className="flex justify-between items-center  ">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Category:
              </h2>
              <p className="text-sm font-medium text-gray-900 dark:text-slate-200 mb-3">
                {category}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Description:
              </h2>
              <p className="text-sm font-medium text-gray-900 dark:text-slate-200 mb-3">
                {courseTitle}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Rating:
              </h2>
              <div className="flex items-center text text-yellow-500">
                <span>{rating}</span>&nbsp;
                <span className="flex ">
                  <StartRating stars={rating}></StartRating>
                </span>
                &nbsp;
                <span className="text-gray-400 dark:text-gray-200">
                  ({numberOfReview})
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Regular Price:
              </h2>
              <p className="flex items-center text-gray-400 dark:text-gray-200">
                <span className="font-semibold text-lg">${discountPrice}</span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Discount Price:
              </h2>
              <p className="flex items-center text-gray-400 dark:text-gray-200">
                <span className="font-semibold text-lg">${regularPrice}</span>
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="tracking-widest text-sm  font-semibold text-gray-600 dark:text-gray-200 mb-1 ">
                Total Watch:
              </h2>
              <div className="flex justify-between space-x-3 text-gray-400 dark:text-slate-200">
                <span className="flex items-center ">
                  <FaRegEye></FaRegEye>&nbsp;1.2K
                </span>
                <span className="flex items-center">
                  <FaRegComment></FaRegComment>&nbsp;6
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2">
          <ReactToPdf targetRef={ref} filename={`${courseTitle}.pdf`}>
            {({ toPdf }) => (
              <button
                className="text-white w-full bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded"
                onClick={toPdf}
              >
                Download PDF
              </button>
            )}
          </ReactToPdf>
        </div>
      </div>
      <div className="p-4 w-full md:w-[50%] ">
        <div className="border-2 rounded-lg h-full border-opacity-60 overflow-hidden">
          <img
            src={imageURL}
            alt={courseTitle}
            className="w-full object-cover object-center"
          />
          <div className="p-4">
            <h3 className="tracking-widest text-xs font-medium text-gray-400 dark:text-gray-200 mb-1 uppercase">
              category
            </h3>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              {category}
            </h2>
            <p className="leading-relaxed text-gray-400 dark:text-gray-200">
              {courseTitle.slice(0, 55)}...
            </p>
            <div className="flex items-center text text-yellow-500">
              <span>{rating}</span>&nbsp;
              <span className="flex ">
                <StartRating stars={rating}></StartRating>
              </span>
              &nbsp;
              <span className="text-gray-400 dark:text-gray-200">
                ({numberOfReview})
              </span>
            </div>
            <p className="flex items-center text-gray-400 dark:text-gray-200">
              <span className="font-semibold text-lg">${regularPrice}</span>
              &nbsp;
              <span className="line-through">${discountPrice}</span>
            </p>
            <div className="flex justify-between items-center ">
              <Link
                to={`/courses/`}
                className=" text-white bg-indigo-600 hover:bg-indigo-700 transition-colors md:w-auto w-full inline-flex items-center rounded px-3 py-2 "
              >
                Back to Courses
              </Link>
              <Link
                to={`/checkout/${id}`}
                className=" text-white bg-indigo-600 hover:bg-indigo-700 transition-colors md:w-auto w-full inline-flex items-center rounded px-3 py-2 "
              >
                <BsShieldLock></BsShieldLock>&nbsp;
                <span> Get Premium Access</span>
              </Link>
            </div>
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
  );
};

export default CourseDetails;
