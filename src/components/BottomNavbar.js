import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BottomNavbar = ({ searchText }) => {
  const [text, setText] = useState("")
    const onSubmit = (e) => {
         e.preventDefault()
         searchText(text)
    }
  return (
    <div className="flex justify-between px-2 sm:px-6 md:px-10 items-center fixed top-0 w-full bg-gray-500 opacity-95 sm:py-2 h-16 sm:h-20">
      <Outlet />
      <div className="flex justify-center items-center text-lg sm:text-xl gap-3 sm:gap-5 py-4 text-white font-semibold">
        <Link
          to="/images"
          className="flex items-center justify-evenly gap-2 opacity-100"
        >
          <h3 className="uppercase font-bold hover:text-blue-300">Images</h3>
        </Link>
        <Link to="/videos" className="flex items-center justify-center gap-2">
          <h3 className="uppercase font-bold hover:text-blue-300">Videos</h3>
        </Link>
      </div>
      <div>
        <div className="text-base sm:text-lg bg-gray-200 h-fit rounded-md ">
          <form onSubmit={onSubmit} className="relative flex items-center">
            <input
              className="py-3 pr-2 sm:pr-10 pl-2 sm:pl-4 bg-gray-200 font-medium hover:bg-gray-100 outline-none box-border capitalize rounded-md w-full"
              type="text"
              onChange={(e) => setText(e.target.value)}
              maxLength={9}
              placeholder="Search Here :"
              value={text}
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-white text-blue-500 hover:bg-blue-500 transition-all hover:text-white font-bold absolute mr-2 right-0 duration-500"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
