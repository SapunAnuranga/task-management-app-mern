import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-white dark:bg-[#1f1f1f] px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <div>
          <button
            onClick={() => dispatch(setOpenSidebar(true))}
            className="text-2xl text-gray-500 block md:hidden"
          >
            ☰
          </button>
        </div>

        {location?.pathname !== "/dashboard" && (
          <form className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6] dark:bg-[#1c1c1c]">
            <MdOutlineSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800"
            />
          </form>
        )}
      </div>

      <div className="flex gap-2 items-center">
        {/* <NotificationPanel /> */}

        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
