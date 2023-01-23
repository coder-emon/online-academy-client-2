import React from "react";
import { FaArrowRight, FaRegComment, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import StartRating from "../StarRating/StartRating";

const CourseCard = ({ course }) => {
  const {
    id,
    courseTitle,

    imageURL,
    category,
    rating,
    numberOfReview,
    regularPrice,
    discountPrice,
  } = course;
  return (
    <div className="p-4 w-full md:w-1/3 ">
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
            <span className="font-semibold text-lg">${regularPrice}</span>&nbsp;
            <span className="line-through">${discountPrice}</span>
          </p>
          <div className="flex justify-between items-center text-gray-400 dark:text-gray-200">
            <Link
              to={`/course/${id}`}
              className="flex text-indigo-500 items-center gap-1"
            >
              Details <FaArrowRight></FaArrowRight>
            </Link>
            <div className="flex justify-between space-x-3">
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
    </div>
  );
};

export default CourseCard;
