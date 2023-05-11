import React from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function ScrollToTop() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrolltoTop}
      className="absolute bottom-5 md:bottom-20 left-5 md:left-20"
    >
      <div className="scrolltoTop bg-primary-light rounded-full p-2 hover:bg-primary-light">
        <div className="arrowtop">
          <MdOutlineKeyboardArrowUp className="text-xl" />
          <MdOutlineKeyboardArrowUp className="text-xl" />
          <MdOutlineKeyboardArrowUp className="text-xl" />
        </div>
        <IoMdArrowDropupCircle className="text-3xl" />
      </div>
    </div>
  );
}

export default ScrollToTop;
