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
      className="absolute bottom-8 right-5 md:right-20"
    >
      <div className="scrolltoTop bg-tourquise rounded-full p-2 hover:bg-primary">
        <div className="arrowtop">
          <MdOutlineKeyboardArrowUp className="text-xl" />
          <MdOutlineKeyboardArrowUp className="text-xl" />
          <MdOutlineKeyboardArrowUp className="text-xl" />
        </div>
        <IoMdArrowDropupCircle className="text-2xl" />
      </div>
    </div>
  );
}

export default ScrollToTop;
