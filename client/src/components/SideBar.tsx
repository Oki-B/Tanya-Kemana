import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { IoHome, IoNewspaper } from "react-icons/io5";
import { FaFileCirclePlus, } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { PiSignOutFill } from "react-icons/pi";

export default function SideBar() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed flex flex-col left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg dark:shadow-none overflow-y-auto"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800">
          <a
            href="https://flowbite.com/"
            className="mb-5 flex items-center ps-2.5"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="me-3 h-6 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Tanya Kemana
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to={"/"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <IoHome size={20} color={"#4B5563"} />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/generate"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <FaFileCirclePlus size={20} color={"#4B5563"} />
                <span className="ms-3">Generate Itinerary</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/generate"}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <IoNewspaper size={20} color={"#4B5563"} />
                <span className="ms-3">Articles</span>
              </NavLink>
            </li>

          </ul>
        </div>
        <div className=" bg-white py-4 px-4 border-t border-gray-200 dark:border-gray-700 mt-4 flex flex-col gap-2 relative bottom-2 w-full">
          <div>
            {/* User Profile */}
            <div className="flex items-center gap-4 border-b pb-3 border-gray-400 dark:border-gray-700">
              <img src="https://ui-avatars.com/api/?name=user1&background=random&color=fff" alt="userImg" className="w-8 h-8 rounded-full"/>
              <div className="font-medium dark:text-white flex w-full justify-between items-center">
                <p>John Doe</p>
                <button type="button" className="w-fit text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-xs p-2 text-center dark:focus:ring-gray-900"><FaUserEdit size={16} color="black"/></button>
              </div>
            </div>
            <Link to="/login" className="mt-4 flex w-full justify-between w-full focus:outline-none text-white text-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><p className="text-center w-full">Sign Out</p><PiSignOutFill size={20}/>
            </Link>
          </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="w-full flex flex-col justify-center items-center gap-1">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Syaoki Biek™</a>   </span>
          <p className="text-xs text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved.</p>
          </div>
      </div>
            
          </div>
      </aside>
    </>
  );
}
