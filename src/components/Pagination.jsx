import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({pageNo,handlePrev,handleNext}) => {
  return (
    <div className="bg-gray-400 w-full flex justify-center items-center mt-4 text-center text-white p-2">
      <FontAwesomeIcon onClick={handlePrev}  icon={faArrowLeft} className="cursor-pointer" />
      <div className="mx-4">{pageNo}</div>
      <FontAwesomeIcon onClick={handleNext} icon={faArrowRight} className="cursor-pointer" />
    </div>
  );
};

export default Pagination;
