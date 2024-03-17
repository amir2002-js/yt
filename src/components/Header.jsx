import { IconContext } from "react-icons";
import {
  HiOutlineBell,
  HiOutlineVideoCamera,
  HiMicrophone,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
} from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-7 py-4 flex items-center justify-between">
      {/* account notif .... */}
      <div className="flex md:gap-2 items-center justify-center flex-none">
        {/* account */}
        <div className="w-8 h-8 rounded-full mr-5 bg-orange-500"></div>

        {/* notification */}
        <div className="rounded-full hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "25px" }}>
            <HiOutlineBell />
          </IconContext.Provider>
        </div>

        {/* camera */}
        <div className="rounded-full hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "25px" }}>
            <HiOutlineVideoCamera />
          </IconContext.Provider>
        </div>

        {/* icon */}
        <div className="md:hidden rounded-full hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "20px" }}>
            <HiMicrophone />
          </IconContext.Provider>
        </div>

        <div className="md:hidden rounded-full p-3 hover:bg-gray-200 transition-all">
          <IconContext.Provider value={{ size: "24px" }}>
            <HiOutlineMagnifyingGlass />
          </IconContext.Provider>
        </div>
      </div>

      {/* input form */}
      <div className="hidden md:flex items-center justify-between gap-5 ">
        {/* icon */}
        <div className=" rounded-full bg-gray-100 hover:bg-gray-200 p-3 transition-all">
          <IconContext.Provider value={{ size: "20px" }}>
            <HiMicrophone />
          </IconContext.Provider>
        </div>

        {/* form */}
        <form
          action=""
          className="flex justify-center items-center rounded-full border border-gray-300"
        >
          <label
            htmlFor=""
            className=" rounded-l-full bg-gray-100 py-2 px-5 hover:bg-gray-200 transition-all border-r border-gray-300"
          >
            <IconContext.Provider value={{ size: "26px" }}>
              <HiOutlineMagnifyingGlass />
            </IconContext.Provider>
          </label>
          <input
            type="text"
            className=" focus-visible:outline-none rounded-r-full p-2 w-52 lg:w-96"
          />
        </form>
      </div>

      {/* menu */}
      <div className="flex items-center">
        <div className="flex items-center px-2 gap-0.5">
          <IconContext.Provider value={{ size: "30px", color: "red" }}>
            <FaYoutube />
          </IconContext.Provider>
          <p className=" font-bold text-lg tracking-tighter">YouTube</p>
        </div>

        <div className=" p-2 hover:bg-gray-200 rounded-full">
          <IconContext.Provider value={{ size: "26px" }}>
            <HiOutlineBars3 />
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
}
